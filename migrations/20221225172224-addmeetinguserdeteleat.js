module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "MeetingUsers", // name of Source model
      "deletedAt", // name of the key we're adding
      {
        allowNull: true,
        type: Sequelize.DATE,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "MeetingUsers", // name of Source model
      "deletedAt" // key we want to remove
    );
  },
};
