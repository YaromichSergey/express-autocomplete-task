module.exports = app => {
  const cities = require("../controllers/city.controller.js");

  const router = require("express").Router();

  router.get("/", cities.findAll);

  app.use("/api/cities", router);
};
