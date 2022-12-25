"use strict";
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("MeetingUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      meetingId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Meetings",
          key: "id",
          as: "meetings",
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "users",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable("MeetingUsers");
  },
};
