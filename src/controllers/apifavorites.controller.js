const db = require("../models");
const Favorites_db = db.Favorites_db;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.userFav) {

        console.log(req.body)
        res.status(400).send({
          message: "Error"
        });
        return;
      }

      const favorites = {
        userFav: req.body.userFav,
        favIds: req.body.favIds,
      };
    
      Favorites_db.create(favorites)
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