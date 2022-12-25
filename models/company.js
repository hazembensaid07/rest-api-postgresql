"use strict";
module.exports = function (sequelize, DataTypes) {
  const Company = sequelize.define("Company", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Company.associate = (models) => {
    Company.hasMany(models.Project, {
      foreignKey: {
        name: "companyid",
        //company can have 0 project
        allowNull: true,
      },
      as: "projects",
    });
  };
  return Company;
};
