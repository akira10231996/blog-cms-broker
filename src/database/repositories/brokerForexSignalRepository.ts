import { IRepositoryOptions } from './IRepositoryOptions';
import AuditLogRepository from './auditLogRepository';
import Error404 from '../../errors/Error404';
import lodash from 'lodash';
import moment from 'moment';
import Sequelize from 'sequelize';
import SequelizeFilterUtils from '../utils/sequelizeFilterUtils';
import SequelizeRepository from './sequelizeRepository';

const Op = Sequelize.Op;

class BrokerForexSignalRepository {
  static TRANSFORM_FIELDS = [
    'costs',
    'notifications',
    'traded_markets',
    'investment_horizon',
    'trading_signal_amount',
  ];

  static REST_FIELDS = {
    prodiver: '',
    test_posibilities: '',
    test_posibilities_tick: false,
    beginners_level: false,
  };

  static DATA_PREFIX = 'forex_signal_';

  static FIELD_SEPARATOR = '||';
  static DATA_SEPARATOR = ';;';

  static _textToArray(value) {
    return (value || '')
      .split(this.DATA_SEPARATOR)
      .map((fields) => {
        const [text, url] = fields.split(
          this.FIELD_SEPARATOR,
        );
        return {
          text: text || '',
          url: url || '',
        };
      });
  }

  static _arrayToText(value) {
    return (value || [])
      .map(({ text, url }) =>
        [text, url]
          .filter(Boolean)
          .join(this.FIELD_SEPARATOR),
      )
      .join(this.DATA_SEPARATOR);
  }

  static _relatedData(data) {
    const result = {};
    Object.keys(this.REST_FIELDS).forEach((field) => {
      result[field] =
        data[`${this.DATA_PREFIX}${field}`] ||
        this.REST_FIELDS[field];
    });
    this.TRANSFORM_FIELDS.forEach((field) => {
      result[field] = this._arrayToText(
        data[`${this.DATA_PREFIX}${field}`],
      );
    });
    return result;
  }

  static includes(options: IRepositoryOptions) {
    return [];
  }

  static async create(data, options: IRepositoryOptions) {
    const transaction =
      SequelizeRepository.getTransaction(options);

    const record =
      await options.database.broker_forex_signal.create(
        {
          ...lodash.pick(data, ['id']),
          ...this._relatedData(data),
          ip: data.ip ?? '',
          created: moment(),
          modified: moment(),
        },
        {
          transaction,
        },
      );

    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async update(
    id,
    data,
    options: IRepositoryOptions,
  ) {
    const transaction =
      SequelizeRepository.getTransaction(options);

    let record =
      await options.database.broker_forex_signal.findOne({
        where: {
          id,
        },
        transaction,
      });

    if (!record) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...this._relatedData(data),
        ip: data.ip ?? '',
        modified: moment(),
      },
      {
        transaction,
      },
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async destroy(id, options: IRepositoryOptions) {
    const transaction =
      SequelizeRepository.getTransaction(options);

    let record =
      await options.database.broker_forex_signal.findOne({
        where: {
          id,
        },
        transaction,
      });

    if (!record) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  static async destroyByBroker(
    id,
    options: IRepositoryOptions,
  ) {
    const transaction =
      SequelizeRepository.getTransaction(options);

    await options.database.broker_forex_signal.destroy({
      where: {
        id: id,
      },
      transaction,
    });
  }

  static async findById(id, options: IRepositoryOptions) {
    const transaction =
      SequelizeRepository.getTransaction(options);

    const include = this.includes(options);

    const record =
      await options.database.broker_forex_signal.findOne({
        where: {
          id,
        },
        include,
        transaction,
      });

    if (!record) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const where = {
      id: {
        [Op.in]: ids,
      },
    };

    const records =
      await options.database.broker_forex_signal.findAll({
        attributes: ['id'],
        where,
      });

    return records.map((record) => record.id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const transaction =
      SequelizeRepository.getTransaction(options);

    return options.database.broker_forex_signal.count({
      where: {
        ...filter,
      },
      transaction,
    });
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    let whereAnd: Array<any> = [];
    let include = this.includes(options);

    if (filter) {
      if (filter.idRange) {
        const [start, end] = filter.idRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            id: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            id: {
              [Op.lte]: end,
            },
          });
        }
      }

      [].forEach((field) => {
        if (filter[field]) {
          whereAnd.push(
            SequelizeFilterUtils.ilikeIncludes(
              'broker_forex_signal',
              field,
              filter[field],
            ),
          );
        }
      });

      [].forEach((field) => {
        if (
          filter[field] === true ||
          filter[field] === 'true' ||
          filter[field] === false ||
          filter[field] === 'false'
        ) {
          whereAnd.push({
            [field]:
              filter[field] === true ||
              filter[field] === 'true',
          });
        }
      });
    }

    const where = { [Op.and]: whereAnd };

    let { rows, count } =
      await options.database.broker_forex_signal.findAndCountAll(
        {
          where,
          include,
          limit: limit ? Number(limit) : undefined,
          offset: offset ? Number(offset) : undefined,
          order: orderBy
            ? [orderBy.split('_')]
            : [['id', 'DESC']],
          transaction:
            SequelizeRepository.getTransaction(options),
        },
      );

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'broker_forex_signal',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  static async _fillWithRelationsAndFiles(
    record,
    options: IRepositoryOptions,
  ) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction =
      SequelizeRepository.getTransaction(options);

    return output;
  }
}

export default BrokerForexSignalRepository;
