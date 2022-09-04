import { getConfig } from '../config';
import { IServiceOptions } from './IServiceOptions';
import fs from 'fs';
import ImageMigrationRepository from '../database/repositories/imageMigrationRepository';
import LocalFileStorage from './file/localhostFileStorage';
import SequelizeRepository from '../database/repositories/sequelizeRepository';

interface IImageMigration {
  belongsTo: any;
  belongsToColumn: Function;
  belongsToId: string;
  name: string;
  type: string;
  link: string;
  linkTitle: string;
  privateUrl: Function;
}

interface IImageMigrations {
  [key: string]: IImageMigration;
}

export default class MigrationService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  private convert(data, imageMigration: IImageMigration) {
    if (!data) {
      return {};
    }
    return {
      belongsTo: imageMigration.belongsTo.getTableName(),
      belongsToColumn: imageMigration.belongsToColumn(data),
      belongsToId: data[imageMigration.belongsToId] ?? 0,
      name: data[imageMigration.name] ?? '-',
      type: data[imageMigration.type] ?? '',
      link: data[imageMigration.link] ?? '',
      linkTitle: data[imageMigration.linkTitle] ?? '',
      privateUrl: imageMigration.privateUrl(data) ?? '',
    };
  }

  async convertImage(
    modelName: string,
    imageMigration: IImageMigration,
  ) {
    if (
      !imageMigration.belongsTo.getTableName ||
      typeof imageMigration.belongsTo.getTableName !==
        'function'
    ) {
      return null;
    }

    const transaction =
      await SequelizeRepository.createTransaction(
        this.options.database,
      );

    let total = 0;
    let processed = 0;

    try {
      total = await ImageMigrationRepository.count(
        modelName,
        { ...this.options, transaction },
      );

      console.log(
        `- \`${this.options.database[
          modelName
        ].getTableName()}\` has ${total} records.`,
      );

      const rows = await ImageMigrationRepository.findAll(
        modelName,
        {},
        { ...this.options, transaction },
      );

      for (const row of rows) {
        const internalUrl = LocalFileStorage.internalUrl(
          imageMigration.privateUrl(row),
        );

        if (!fs.existsSync(internalUrl)) {
          console.log(`  >>> missed - \`${internalUrl}\``);
          continue;
        }

        const stat = fs.statSync(internalUrl);

        await ImageMigrationRepository.create(
          {
            ...this.convert(row, imageMigration),
            sizeInBytes: stat.size,
          },
          { ...this.options, transaction },
        );
        processed++;
      }

      await ImageMigrationRepository.truncate(modelName, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      processed = 0;
      throw error;
    }
    console.log(
      `- \`${this.options.database[
        modelName
      ].getTableName()}\` ${processed} records were processed.`,
    );
  }

  async convertImages() {
    if (getConfig().FILE_STORAGE_PROVIDER !== 'localhost') {
      return false;
    }

    const imageMigrations: IImageMigrations = {
      broker_image: {
        belongsTo: this.options.database.broker,
        belongsToColumn: (row) =>
          ['broker_image', row.type].join('_'),
        belongsToId: 'broker_id',
        name: 'filename',
        type: 'type',
        link: 'link',
        linkTitle: 'link_title',
        privateUrl: (row) =>
          [
            '/broker_screenshots/',
            row.broker_id,
            '/',
            row.filename,
          ].join(''),
      },
      broker_certificate_image: {
        belongsTo: this.options.database.broker_certificate,
        belongsToColumn: (row) =>
          ['broker_certificate_image', row.type].join('_'),
        belongsToId: 'broker_certificate_id',
        name: 'filename',
        type: 'type',
        link: 'link',
        linkTitle: 'link_title',
        privateUrl: (row) =>
          [
            '/broker_certificate/',
            row.broker_certificate_id,
            '/',
            row.filename,
          ].join(''),
      },
    };

    const modelNames = Object.keys(imageMigrations);

    for (const modelName of modelNames) {
      await this.convertImage(
        modelName,
        imageMigrations[modelName],
      );
    }
  }
}
