"use strict";
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: true,
      },
    },
    {
      paranoid: true,
    }
  );

  User.associate = (models) => {
    //add tasks association
    User.hasMany(models.Task, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      as: "tasks",
    });
    User.belongsTo(models.Project, {
      foreignKey: {
        name: "projectId",
        //can be associated to a project or not
        allowNull: true,
      },
      as: "user",
    });
    User.belongsToMany(models.Meeting, {
      through: "MeetingUser",
      as: "meetings",
      foreignKey: "userId",
    });
  };
  return User;
};
