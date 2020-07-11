const { prompt } = require("inquirer");
const { inherits } = require("util");
const db = require("./db");




init();

async function starterQuestions() {
    const { choice } = awai prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES",
                    message: "View All Employees"
                },
                {
                    name: "View all Roles",
                    value: "VIEW_ROLES",
                    message: "View All Roles"
                },
                {
                    name: "View all Departments",
                    value: "VIEW_DEPT",
                    message: "View All Departments"
                },
            ]
        }
    ])
    return choice

}

function viewEmployees(){
    // use my sql and create database connection. QUERY the database here
    // to query different tables. 
}

async function init() {
    const choice = starterQuestions();
    switch (choice) {
        case "VIEW_EMPLOYEES":
            viewEmployees();
    }
}
  

//Response that I get back build a switch statement. 
//Switch statement is going to check a response and run the corresponding function
//Function that run, going to do VIEW and pull up all employees and console.log them. 
//ADD employee, then its going to insert into the employee table. 
//End of each function you should call the starterQuestions function

// package.json - npm init, 
//npm install mysql, inquirer,
//view readme to see if anything else to install. 
