/*
*
*  BOARD MODEL
*
*/

module.exports = (sequelize, type) => {
    return sequelize.define('Pin', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        content: type.TEXT,
        title: type.STRING,
        image: type.TEXT
    })
}