module.exports=(sequelize,DataTypes)=>{
    const Contact = sequelize.define('contacts', {
        // Model attributes are defined here
        permenent_address: {
          type: DataTypes.STRING,
          allowNull: false
        },
        current_address: {
          type: DataTypes.STRING
          // allowNull defaults to true
        }
      }, {
        // Other model options go here
      });

      return Contact
}