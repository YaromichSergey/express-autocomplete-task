module.exports = (sequelize, Sequelize) => {
  const City = sequelize.define("city", {
    name: {
      type: Sequelize.STRING
    },
    state_id: {
      type: Sequelize.STRING
    },
    state_code: {
      type: Sequelize.STRING
    },
    country_id: {
      type: Sequelize.STRING
    },
    country_code: {
      type: Sequelize.STRING
    },
    latitude: {
      type: Sequelize.STRING
    },
    longitude: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE
    },
    updatedAt: {
      type: Sequelize.DATE
    },
    flag: {
      type: Sequelize.STRING
    },
    wikiDataId: {
      type: Sequelize.STRING
    }
  });

  return City;
};
