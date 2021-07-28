const db = require("../models");
const Movies_db = db.Movies_db;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.mname) {

        console.log(req.body)
        res.status(400).send({
          message: "Movie Name cannot be empty"
        });
        return;
      }

      const movie = {
        mname: req.body.mname,
        mdescription: req.body.mdescription?req.body.mdescription:'',
        mdate: req.body.mdate?req.body.mdate:'',
      };
    
      Movies_db.create(movie)
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