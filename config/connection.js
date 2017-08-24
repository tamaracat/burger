var mysql = require('mysql');
// var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mounT@in16",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`${connection.threadId}`);
  }
   
});

module.exports = connection;