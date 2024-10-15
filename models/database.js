const mysql = require('mysql2');
const config = require('../config/config');


const connection = mysql.createConnection({
    host : config.DB_HOST,
    user : config.DB_USER,
    password : config.DB_PASSWORD,
    database : config.DB_NAME
});

connection.connect((err) => {
    if(err) {
        console.error("Error connecting to the database.", err.stack);
        return;
    }
    console.log("Connected to MySQL Database! ", connection.threadId);
});


module.exports = connection;