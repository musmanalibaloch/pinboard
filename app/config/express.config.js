const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');


module.exports = (app) => {

    //enable cors
    app.use(cors());

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }))

    // parse application/json
    app.use(bodyParser.json());

    //path to route folders
    var routePath = "./route/"; 
    fs.readdirSync(routePath).forEach(function (file) {
        var route = routePath + file;
        require("../"+route)(app);
    });

}