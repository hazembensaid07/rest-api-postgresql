module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Users", // name of Source model
      "projectId", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
          as: "projectId",
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Users", // name of Source model
      "projectId" // key we want to remove
    );
  },
};
