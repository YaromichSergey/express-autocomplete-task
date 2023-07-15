const db = require("../models");
const City = db.citites;
const Op = db.Sequelize.Op;

const searchTypes = {
  start: (search) => `${search}%`,
  mid: (search) => `%${search}%`,
  end: (search) => `%${search}`
}

exports.findAll = (req, res) => {
  const search = req.query.search;
  const type = req.query.searchType;
  const likeCondition = type ? searchTypes[type](search) : searchTypes.mid(search);
  const condition = search ? { name: { [Op.like]: likeCondition } } : null;

  City.findAll({ where: condition, limit: 50 })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
