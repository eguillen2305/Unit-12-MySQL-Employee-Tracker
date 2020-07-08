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
                    name: "View All Employees"
                    value: "VIEW_EMPLOYEES"
               }, 
            ]
        }
    ])
}