//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
//Table
const cTable = require("console.table");
//Choices 
const choiceOptions = ["View all employees", "View all departments", "View all roles", "Update role", "Add department", "Add employee", "Remove employee", "Exit"]

const connect = mysql.createConnection({
    host: "127.0.0.1",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    password: process.env.DB_PASSWORD,
    database: 'trackerDB'
});