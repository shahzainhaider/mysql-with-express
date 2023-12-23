const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize('employeedb','root','SH@zain1',{
    host:"localhost",
    logging:false,
    dialect:"mysql"
})

try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db ={}
  db.Sequelize = Sequelize
  db.sequelize = sequelize

  db.contact = require('./contact.js')(db.sequelize,DataTypes)
  db.user = require('./user.js')(db.sequelize,DataTypes,Model) 
  db.sequelize.sync({force:false})
  

module.exports= db
