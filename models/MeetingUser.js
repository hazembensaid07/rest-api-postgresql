"use strict";
module.exports = (sequelize, DataTypes) => {
  const MeetingUser = sequelize.define(
    "MeetingUser",
    {
      meetingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      //soft delete
      paranoid: true,
    }
  );

  return MeetingUser;
};
