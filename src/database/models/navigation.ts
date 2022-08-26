import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const navigation = sequelize.define(
    'navigation',
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 255],
        },
      },
      link: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 255],
        },
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 255],
        },
      },
      target: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [0, 15],
        },
      },
      sort: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      activated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      show_user_logged_in: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      show_in_navigation: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      type: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
      },
      ip: {
        type: DataTypes.CHAR(39),
        allowNull: false,
        validate: {
          notEmpty: true,
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
          fields: ['parent_id'],
        },
        {
          fields: ['activated'],
        },
        {
          fields: [
            'activated',
            'show_user_logged_in',
            'show_in_navigation',
          ],
        },
        {
          fields: ['activated', 'parent_id', 'type'],
        },
        {
          fields: ['activated', 'type'],
        },
      ],
      underscored: true,
      timestamps: false,
      paranoid: true,
    },
  );

  navigation.associate = (models) => {
    models.navigation.belongsTo(models.navigation, {
      as: 'parent',
      constraints: true,
      foreignKey: {
        allowNull: true,
      },
      onDelete: 'NO ACTION',
      onUpdate: 'NO ACTION',
    });
  };

  return navigation;
}
