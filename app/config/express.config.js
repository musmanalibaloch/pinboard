const cors = require('cors');
const bodyParser = require('body-parser');



module.exports = (app) => {
    app.use(cors());
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json());
    
}