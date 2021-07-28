module.exports = app => {
    const users_db = require("../controllers/apiusers.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", users_db.create);

    app.use('/api/create', router);
  };