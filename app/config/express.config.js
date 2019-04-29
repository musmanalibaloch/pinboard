const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');

module.exports = (app) => {

    //statically serve file
    app.use(express.static('uploads'))

    //enable cors
    app.use(cors());

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }))

    // parse application/json
    app.use(bodyParser.json());

    //path to route folders
    var routePath = "./route/"; 
    fs.readdirSync(routePath).forEach(function (file) {
        var route = routePath + file;
        require("../"+route)(app);
    });

}