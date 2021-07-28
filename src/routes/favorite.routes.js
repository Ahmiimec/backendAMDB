module.exports = app => {
    const favorites_db = require("../controllers/apifavorites.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", favorites_db.create);

    app.use('/api/create/favorites', router);
  };