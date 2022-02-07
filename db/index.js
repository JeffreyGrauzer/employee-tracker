const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }
  findall() {
    return this.connection.promise().query("SELECT * employees");
  }
  nextFunc() {
    return this.connection.promise().query("");
  }
}

module.exports = new DB(connection);
