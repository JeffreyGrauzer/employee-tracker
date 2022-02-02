const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "schmotta",
    database: "e-tracker",
});

module.exports = db;