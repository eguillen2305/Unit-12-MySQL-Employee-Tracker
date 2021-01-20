# Unit 12 -  MySQL-Employee Tracker
 Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.
 
[![Javascript](https://img.shields.io/badge/Javascript-JS-blue.svg)](https://www.w3schools.com/Js/)
[![Node.js](https://img.shields.io/badge/Node.js-Node-green.svg)](https://nodejs.org/en/)


## Summary

Back-end Content Management System for managing a database of employees. Uses node,inquirer, and MySQL
 https://note-taker-app2035.herokuapp.com/
 
## User Story
```sh

As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business


```

### Key Components
department:


id - INT PRIMARY KEY

name - VARCHAR(30) to hold department name



role:


id - INT PRIMARY KEY

title -  VARCHAR(30) to hold role title

salary -  DECIMAL to hold role salary

department_id -  INT to hold reference to department role belongs to



employee:


id - INT PRIMARY KEY

first_name - VARCHAR(30) to hold employee first name

last_name - VARCHAR(30) to hold employee last name

role_id - INT to hold reference to role employee has

manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

## How to use the Application

### Local Demo Install
1. first clone the application to your local file
`git clone`
2. install the packages with npm `npm install`
3. run the server with `node server.js`

## Technology Used
JavaScript

MySQL


## Author
eguillen2035

## License
This project is licensed under the terms of the **MIT** license.
