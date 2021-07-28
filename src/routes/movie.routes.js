module.exports = app => {
    const movies_db = require("../controllers/apimovies.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", movies_db.create);

    app.use('/api/create/movie', router);
  };