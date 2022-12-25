"use strict";
module.exports = (sequelize, DataTypes) => {
  const Meeting = sequelize.define("Meeting", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
    },
  });

  Meeting.associate = (models) => {
    Meeting.belongsToMany(models.User, {
      through: "MeetingUser",
      foreignKey: "meetingId",
      as: "users",
    });
  };
  return Meeting;
};
