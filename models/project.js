"use strict";
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Project.associate = (models) => {
    Project.belongsTo(models.Company, {
      foreignKey: {
        name: "companyid",
        allowNull: true,
      },
      as: "projects",
    });
    Project.hasOne(models.User, {
      foreignKey: {
        name: "projectId",
        allowNull: true,
      },
      as: "user",
    });
  };
  return Project;
};
