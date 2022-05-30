const inquirer = require("inquirer");
const mysql = require("mysql");
//Table
const cTable = require("console.table");
require("dotenv").config();

//Choices 
const choice = ["View all employees", "View all departments", "View all roles", "Update role", "Add department", "Add employee", "Remove employee", "Exit"]

const connection = mysql.createConnection({
    host: "127.0.0.1",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

console.log(`Welcome to the Employee Tracker! What would you like to do?`);

const start = () => {
    inquirer.prompt(
        {
            name: "optionChoices",
            type: 'list',
            message: "Please select an option?",
            choices: choice

        }).then(answer => {
            switch (answer.optionChoices){
                case "View all employees":
                 viewEmployees();
                 break;
                case "View all departments":
                 viewDepartment();
                 break;
                case "View all roles":
                 viewRoles();
                 break;
                 case "Update role":
                 updateRole();
                 break;
                case "Add department":
                 addDepartment();
                 break;
                case "Add employee":
                 addEmployee();
                 break;
                 case "Remove employee":
                 removeEmployee();
                 break;
                case "Exit":
                    console.log("Thank you for using Employee Tracker!");
                    connection.end();
                 break;
                
                };   
            });
        };

         // VIEW ALL EMPLOYEES
         const viewEmployees = () => {
        connection.query("SELECT * FROM employees", function(err, results){
                if(err) throw err;
                console.table(results);
                start();
            });
}
           

        // VIEW DEPARTMENT
        const viewDepartment = () => {
          
            connection.query("SELECT * FROM departments", function(err, results){
                if(err) throw err;
                console.table(results);
                start();
            });
        };

        // VIEW ROLES
        const viewRoles = () => {
            connection.query("SELECT * FROM roles", function(err, results){
                if(err) throw err;
                console.table(results);
                start();
            });
        };

         // UPDATE ROLE
         const updateRole = () => {
               
        };

        // // ADD DEPARTMENT
        // const addDepartment = () => {
    
        //     }
       
    function addDepartment() {
        inquirer.prompt([
           {
             type: 'input',
             message: 'What is the name of the new department you would like to add?',
             name: 'adding',
        
           }
         ]).then(function(answer){
           connection.query(
             "INSERT INTO department (name) VALUES (?)",
             [answer.adding],
             (err, results) =>{
               if(err) throw err
             console.log("New department added"); 
             
                 start();
               }
               )
            })};
   

        // ADD EMPLOYEE
        const addEmployee = () => {
          
            };

        // REMOVE EMPLOYEE
        const removeEmployee = () => {
                   
            };


    connection.connect(err => {
    if(err) throw err;
      start();
    });