const config = require('./config');

const dbConfig = {
    host : config.DB_HOST,
    username : config.DB_USER,
    password : config.DB_PASSWORD,
    database : config.DB_NAME
}

module.exports = dbConfig;