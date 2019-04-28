/*
* BOARD CONTROLLER
*/

const db = require('../config/sequelize.config')();
const util = require('../utility/common.helper');
const { validationResult } = require('express-validator/check');

exports.createPin = async (req, res) => {
    try {
        if (req.file) {
    
        //get props
        const { content, title } = req.body;


        //create new pin on board
        const pin = await db.pin.create({ "image": req.file.filename, "content": content, "title": title });

        //sends success or failure response
        util.responseHandler(res, 'pin', pin);
    } else {
       throw new Error("file is not provided");
    }

    } catch (error) {
        //throw error
        res.send(error.message).status(500);
    }
}

exports.getPins = async (req, res) => {
    try {

        // Finds the validation errors in this request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        //paginate
        const total = 10;
        const page = req.body.page || 0;

        //response 
        res.send({ pins: await db.pin.findAll({ offset: page, limit: total }).map((elem) => elem) }).status(200);

    } catch (error) {

        //error response.
        res.send(error.message).status(500);
    }
}

exports.detailPin = async (req, res) => {
    try {
        
        // Finds the validation errors in this request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        //get props
        const {pinId} = req.params;
      
        //data
        const data = await db.pin.findAll({where:{id:pinId},include: [db.comment]});

        res.send(data).status(200);

    } catch (error) {
        res.send(error.message).status(500);
    }
}

