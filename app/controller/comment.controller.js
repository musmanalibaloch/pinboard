/*
* COMMENT CONTROLLER
*/

const db = require('../config/sequelize.config')();
const util = require('../utility/common.helper');
const { validationResult } = require('express-validator/check');

exports.createComment = async (req, res) => {
    try {

        // Finds the validation errors in this request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        //get props
        const {comment,pinId} = req.body;

        if(!comment || !pinId)
        {
            throw new Error("content or pin")
        }

        //create new pin on board
        const comments = await db.comment.create({ "PinId": pinId, "comment": comment });

        //sends success or failure response
        util.responseHandler(res, 'comment', comments);

    } catch (error) {
        //throw error
        res.send(error.message).status(500);
    }
}


