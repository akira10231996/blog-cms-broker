import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const broker_email = sequelize.define(
    'broker_email',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      broker_id: {
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
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
      indexes: [],
      underscored: true,
      timestamps: false,
      paranoid: true,
    },
  );

  broker_email.associate = (models) => {
    models.broker_email.belongsTo(models.broker, {
      constraints: true,
      foreignKey: 'broker_id',
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };

  return broker_email;
}
