
const pinController = require('../controller/pin.controller');
const { check } = require('express-validator/check');
const multer = require('multer');

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {    
    if(!req.body.content || req.body.title)
    {
      throw new Error("content or title is not provided");
    }
    cb(null, 'uploads');
  } catch (error) {
      throw new Error(error.message);
  }
  },
  filename: function (req, file, cb) {
    let fileExtension = file.originalname.split('.')[1]
    cb(null, file.fieldname + '-' + Date.now()+fileExtension);
  }
})
var upload = multer({ storage: storage });


/*
*
* @Description: Create board endpoints 
* @Argument @Property{app(express instance)}   
* 
*/
module.exports = async (app) => {

  app.post(
    "/pins",
    upload.single('file'),
    await pinController.createPin);
  
  app.get
  ("/pins",
  [
    check('page').optional()
  ],
  await pinController.getPins
  );

  app.get
  ("/pins/:pinId",
  [
    check('pinId').optional()
  ],
  await pinController.detailPin
  )
}