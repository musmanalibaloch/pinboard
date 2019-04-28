/*
*
*  BOARD MODEL
*
*/

module.exports = (sequelize, type) => {
    const Pin = sequelize.define('Pin', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        content: type.TEXT,
        title: type.STRING,
        image: type.TEXT
    })

    Pin.associate = (model) =>{
        Pin.hasMany(model.comment);
    }

    return Pin;
}