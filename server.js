const inquirer = require("inquirer");
const mysql = require("mysql");
//Table
const cTable = require("console.table");

//Choices 
const choiceOptions = ["View all employees", "View all departments", "View all roles", "Update role", "Add department", "Add employee", "Remove employee", "Exit"]

const connection = mysql.createConnection({
    host: "127.0.0.1",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    password: process.env.DB_PASSWORD,
    database: 'tracker_db'
});

console.log(`Welcome to the Employee Tracker! What would you like to do?`);

const start = () => {
    inquirer.prompt(
        {
            name: "optionChoices",
            type: 'list',
            message: "Please select an option?",
            choices: choiceOptions

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
         };

        // VIEW DEPARTMENT
        const viewDepartment = () => {
          
        };

        // VIEW ROLES
        const viewRoles = () => {
            
        };

         // UPDATE ROLE
         const updateRole = () => {
               
        };

        // ADD DEPARTMENT
        const addDepartment = () => {
           
        };

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