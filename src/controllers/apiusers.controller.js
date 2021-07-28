const db = require("../models");
const ApiUsers = db.ApiUsers;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    if (!req.body.username) {

        console.log(req.body)
        res.status(400).send({
          message: "Username cannot be empty"
        });
        return;
      }

    if (!req.body.password) {
        res.status(400).send({
            message: "Password cannot be empty"
        });
        return;
    }
      const user = {
        username: req.body.username,
        password: req.body.password,
      };
    
      ApiUsers.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the User."
          });
        });
  
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  
};

// Find a single User with an id
exports.findOne = (req, res) => {
  
};

// Update a User by the id in the request
exports.update = (req, res) => {
  
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
};
