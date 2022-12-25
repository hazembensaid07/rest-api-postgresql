module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      "Projects", // name of Source model
      "companyid", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Projects",
          key: "id",
          as: "companyid",
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      "Projects", // name of Source model
      "companyid" // key we want to remove
    );
  },
};
