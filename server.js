const mysql = require("mysql");
const inquirer = require("inqirer");
var connection = mysql.createconnection({
	host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Bamazon"
});
