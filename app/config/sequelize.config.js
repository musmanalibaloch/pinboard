const Sequelize = require('sequelize');
const { db } = require('./env.config'); //db configuration


/*
* @Description : Configures sequelize, connect to db, loads all model
*/
module.exports = () => {

    //load all model 
    var model = {};

    // initialize database connection
    var sequelize = new Sequelize(db.DB, db.DB_USER, db.DB_PASSWORD, {
        host: 'mysql',
        dialect: db.DB_DIALECT,

        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

    //validate db connetion
    sequelize.authenticate(connection => {
        console.log(connection);
    })

    // load models
    var models = [
        'board',
        'comment'
    ];
    models.forEach(function (modelName) {
        console.log('load models:' + modelName);
        model[modelName] = sequelize.import('../model/' + modelName + '.model.js');
    });

    //load all models in db
    sequelize.sync();


    //make associations between schema
    models.forEach((table) => {
        if ('associate' in model[table]) {
            model[table].associate(model);
        }
    })


    // export db
    module.exports.db = model;
}