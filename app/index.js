
/*
* DEPENDENCIES
*/
const express = require('express');




/*
* INITIALIZATION
*/
const app = express();

require('./config/express.config')(app);

require('./config/sequelize.config')();

const PORT = 8080;

const HOST = "0.0.0.0";


/*
* BOOTSTRAP
*/

app.listen(PORT,HOST, ()=>{console.log(`SERVER IS RUNNING ON PORT ${PORT}`)});