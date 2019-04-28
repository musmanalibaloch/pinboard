/*
*
*  COMMENT MODEL
*
*/

module.exports = (sequelize, type) => {
    const Comment= sequelize.define('Comment', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        comment:{
            type: type.TEXT,
            allowNull: false,
        }
    })

    Comment.associate = (model) =>{
        Comment.belongsTo(model.board);
    }
    return Comment;
}