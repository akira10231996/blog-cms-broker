import { DataTypes } from 'sequelize';
import { i18n } from '../../i18n';

export default function (sequelize) {
  const broker = sequelize.define(
    'broker',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      navigation_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 255],
        },
      },
      name_normalized: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          len: [0, 255],
        },
      },
      activated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_broker: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_compareable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      top_broker: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      top_binary_broker: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      top_forex_broker: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      featured_broker: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      pdf: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      author_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
      },
      author_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
      },
      author_link: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
      },
      ip: {
        type: DataTypes.CHAR(39),
        allowNull: false,
        validate: {
          len: [0, 39],
        },
      },
      created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      modified: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      indexes: [
        {
          name: 'navigation_id',
          fields: ['navigation_id'],
        },
        {
          name: 'top_broker',
          fields: ['top_broker'],
        },
        {
          name: 'activated',
          fields: ['activated'],
        },
      ],
      underscored: true,
      timestamps: false,
    },
  );

  broker.associate = (models) => {
    models.broker.belongsTo(models.navigation, {
      as: 'navigation',
      constraints: true,
      foreignKey: 'navigation_id',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    models.broker.belongsTo(models.author, {
      as: 'author',
      constraints: true,
      foreignKey: 'author_id',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
    models.broker.hasOne(models.broker_metas, {
      as: 'meta',
      foreignKey: 'id',
    });
  };

  return broker;
}
