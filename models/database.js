const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig');


const connection = mysql.createConnection({
    user : dbConfig.username,
    password : dbConfig.password,
    database : dbConfig.database
});

connection.connect((err) => {
    if(err) {
        console.error("Error connecting to the database.", err.stack);
        return;
    }
    console.log("Connected to MySQL Database! ", connection.threadId);
});


module.exports = connection;