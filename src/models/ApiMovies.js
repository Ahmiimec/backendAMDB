module.exports = (sequelize, Sequelize) => {
    const Movies_db = sequelize.define("Movies_db", {
      mname: {
        type: Sequelize.STRING,
        allownull:false,
        unique:true
      },
      mdescription: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      mdate: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      }
    },
    {
      freezeTableName:true
    });
  
    return Movies_db;
  };