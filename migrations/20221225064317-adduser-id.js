module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Tasks", // name of Source model
      "userId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "userId",
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Tasks", // name of Source model
      "userId" // key we want to remove
    );
  },
};
