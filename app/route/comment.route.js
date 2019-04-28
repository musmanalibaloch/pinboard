
const commentController = require('../controller/comment.controller');
const { check } = require('express-validator/check');
/*
*
* @Description: Create board endpoints 
* @Argument @Property{app(express instance)}   
* 
*/
module.exports = ( app ) =>
{

  app.post(
    "/comments",
    [
        check('comment', 'comment is not provided').exists(),
        check('pinId', 'pin id is not provided').exists(),
    ],
    commentController.createComment);
}