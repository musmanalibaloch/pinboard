/*
*
*  BOARD MODEL
*
*/

module.exports = (sequelize, type) => {
    return sequelize.define('Board', {
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