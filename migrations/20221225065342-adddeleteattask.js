module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Tasks", // name of Source model
      "deletedAt", // name of the key we're adding
      {
        allowNull: true,
        type: Sequelize.DATE,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Tasks", // name of Source model
      "deletedAt" // key we want to remove
    );
  },
};
