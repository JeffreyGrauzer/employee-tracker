const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "schmotta",
  database: "employees",
});
db.connect((err) => {
  if (err) throw err;
});

module.exports = db;
