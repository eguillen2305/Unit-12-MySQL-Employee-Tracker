DROP DATABASE IF EXISTS employeeTracker_DB;

CREATE DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE department
(
    id INT
    UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR
    (30) UNIQUE NOT NULL
);
