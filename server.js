const { prompt } = require('inquirer');
const { inherits } = require('util');
const db = require('./db');

init();

async function starterQuestions() {
	const { choice } = await prompt([
		{
			type: 'list',
			name: 'choice',
			message: 'What would you like to do?',
			choices: [
				{
					name: 'View All Employees',
					value: 'VIEW_EMPLOYEES',
					message: 'View All Employees'
				},
				{
					name: 'View all Roles',
					value: 'VIEW_ROLES',
					message: 'View All Roles'
				},
				{
					name: 'View all Departments',
					value: 'VIEW_DEPT',
					message: 'View All Departments'
				},
				{
					name: 'View All Employees By Manager',
					value: 'VIEW_EMPLOYEES_BY_MANAGER',
					message: 'View All Employess by Manager'
				},
				{
					name: 'Add Employee',
					value: 'ADD_EMPLOYEE',
					message: 'Add Employee'
				},
				{
					name: 'Remove Employee',
					value: 'REMOVE_EMPLOYEE',
					message: 'Remove Employee'
				},
				{
					name: 'Update Employee Role',
					value: 'UPDATE_EMPLOYEE_ROLE',
					message: 'Update Employee Role'
				},
				{
					name: 'Update Employee Manager',
					value: 'UPDATE_EMPLOYEE_MANAGER',
					message: 'Update Employee Manager'
				},
				{
					name: 'View All Roles',
					value: 'VIEW_ROLES',
					message: 'View All Roles'
				},
				{
					name: 'Add Role',
					value: 'ADD_ROLE',
					message: 'Add Role'
				},
				{
					name: 'Remove Role',
					value: 'REMOVE_ROLE',
					message: 'Remove Role'
				},
				{
					name: 'View All Departments',
					value: 'VIEW_DEPARTMENTS',
					message: 'View All Departments'
				},
				{
					name: 'Add Department',
					value: 'ADD_DEPARTMENT',
					message: 'Add Department'
				},
				{
					name: 'Remove Department',
					value: 'REMOVE_DEPARTMENT',
					message: 'Remove Department'
				},
				{
					name: 'Quit',
					value: 'QUIT',
					message: 'Quit and Exit'
				}
			]
		}
	]);
	return choice;
}

function viewEmployees() {
	// use my sql and create database connection. QUERY the database here
	// to query different tables.
}

async function init() {
	const choice = starterQuestions();
	switch (choice) {
		case 'VIEW_EMPLOYEES':
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
