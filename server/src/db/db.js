var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'fullstack'
  });

  connection.connect();
  module.exports = connection;