module.exports = (sequelize, Sequelize) => {
    const Favorites_db = sequelize.define("Favorites_db", {
      userFav: {
        type: Sequelize.STRING,
        allownull:false,
        unique:true
      },
      favIds: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
     
    },
    {
      freezeTableName:true
    });
  
    return Favorites_db;
  };