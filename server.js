//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");
require("dotenv").config();

//Declaring the choices
const choice = ["View all employees", "View all departments", "View all roles", "Update role", "Add department", "Add employee","Add role", "Remove employee", "Exit"]

//Connecting to the database
const connection = mysql.createConnection({
    host: "127.0.0.1",
    // Your port; if not 3306
    port: 3306,
    // Your username - stored in the .env file
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

//Starting prompt that allos the user to click on the option they require
const start = () => {
    inquirer.prompt(
        {
            name: "optionChoices",
            type: 'list',
            message: "Select the option you require",
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
                 case "Add role":
                  addRole();
                  break;
                 case "Remove employee":
                 removeEmployee();
                 break;
                case "Exit":
                    // console.log("Thank you for using Employee Tracker!");
                    connection.end();
                 break;
                
                };   
            });
        };

         // VIEW ALL EMPLOYEES
         const viewEmployees = () => {
           //This qurey will select data from the employyes table and pull that information - db
        connection.query("SELECT * FROM employees", function(err, results){
                if(err) throw err;
                //Display the results in a table
                console.table(results);
                start();
            });
}

        // VIEW DEPARTMENT
        const viewDepartment = () => {
          //This qurey will select data from the department table and pull that information -db
            connection.query("SELECT * FROM departments", function(err, results){
                if(err) throw err;
                 //Display the results in a table
                console.table(results);
                start();
            });
        };

        // VIEW ROLES
        const viewRoles = () => {
           //This qurey will select data from the role table and pull that information -db
            connection.query("SELECT * FROM roles", function(err, results){
                if(err) throw err;
                 //Display the results in a table
                console.table(results);
                start();
            });
        };

        function addDepartment() { 

          //The user will get this prompt will appear to ask the user questions
          inquirer.prompt([
              {
                name: "department_name",
                type: "input",
                message: "Enter the department name"
              }
            //Inserting qurey to allow users to add in the department table db
          ]).then(function(res) {
              var query = connection.query(
                  "INSERT INTO departments SET ? ",
                  {
                    department_name: res.department_name
                  
                  },
                  function(err) {
                      if (err) throw err
                      console.table(res);
                      start();
                  }
              )
          })
        }
            
        function addEmployee() {
            inquirer
              .prompt([
                {
                  type: "input",
                  message: "Enter the first name",
                  name: "eeFirstName"
                },
                {
                  type: "input",
                  message: "Enter the surename ?",
                  name: "eeLastName"
                },
                {
                  type: "input",
                  message: "Enter the role id",
                  name: "roleID"
                },
                {
                  type: "input",
                  message: "Enter the manager id",
                  name: "managerID"
                }
              ])
              .then(function(answer) {
                connection.query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {
                  if (err) throw err;
                  console.table(res);
                 start();
                });
              });
          }

          //ADD ROLE
          function addRole() { 
            // Seleccting from the role table in the db - title and salart
            
            connection.query("SELECT roles.title AS Title, roles.salary AS Salary FROM roles",   function(err, res) {
              //Prompt will appear to allow the user to answer the questions
              inquirer.prompt([
                  {
                    name: "Title",
                    type: "input",
                    message: "Please enter the name of the role"
                  },
                  {
                    name: "Salary",
                    type: "input",
                    message: "Please enter the salary amount"
          
                  } 
                  //Insert the new role into the db 
              ]).then(function(res) {
                  connection.query(
                      "INSERT INTO roles SET ?",
                      {
                        title: res.Title,
                        salary: res.Salary,
                      },
                      function(err) {
                          if (err) throw err
                          console.table(res);
                          start();
                      }
                  )
          
              });
            });
            }

  //       // UPDATE ROLE
  //      const updateRole = () => {

               
  // };

          //Start the connection
      connection.connect(err => {
      if(err) throw err;
        start();
      });