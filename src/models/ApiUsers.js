module.exports = (sequelize, Sequelize) => {
    const Users_db = sequelize.define("Users_db", {
      username: {
        type: Sequelize.STRING,
        allownull:false,
        unique:true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      }
    },
    {
      freezeTableName:true
    });
  
    return Users_db;
  };