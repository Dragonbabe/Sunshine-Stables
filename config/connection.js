'use strict';
//SETUP THE MYSQL CONNECTION    
const mysql = require('mysql');
let connection;
//PREPARE FOR FUTURE DEPLOYMENT TO HEROKU
if (process.env.JAWSDB_URL) {
//ESTABLISH A CONNECTION WITH THE LOCALHOST SERVER
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'SoccerTime253!',
        database: 'stables_db'
    });
}
//EXPORT CONNECTION FOR THE ORM!
module.exports = connection;