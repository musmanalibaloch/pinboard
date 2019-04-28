
const boardController = require('../controller/board.controller');
const { check } = require('express-validator/check');
/*
*
* @Description: Create board endpoints 
* @Argument @Property{app(express instance)}   
* 
*/
module.exports = (app) => {

  app.post(
    "/pins",
    [
      check('title', 'title is not provided').exists(),
      check('content', 'content is not provided').exists(),
    ],
    boardController.createPin);
}