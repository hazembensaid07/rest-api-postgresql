"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      paranoid: true,
    }
  );

  Task.associate = (models) => {
    //add userid to tasks
    Task.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        //tasks should be associated with users
        allowNull: false,
      },
      as: "tasks",
    });
  };
  return Task;
};
