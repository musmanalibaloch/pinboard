/*
* BOARD CONTROLLER
*/

const db = require('../config/sequelize.config')();
const util = require('../utility/common.helper');
const { validationResult } = require('express-validator/check');

exports.createPin = async (req,res) =>{
   try {

     // Finds the validation errors in this request
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.array() });
     }

    //get props
    const {content,title} = req.body;

    //create new pin on board
    const pin = await db.board.create({"image":"images","content":content,"title":title});  
    
    //sends success or failure response
    util.responseHandler(res,'pin',pin);

   } catch (error) {
    //throw error
    res.send(error.message).status(500);
   }
}


