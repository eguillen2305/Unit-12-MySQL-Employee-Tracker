use employeeTracker_DB;


INSERT INTO department
    (name)
VALUES
    ('Accounting'),
    ('Legal'),
    ('Sales'),
    ('IT');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Accounts Payable', 500000, 1),
    ('Lawyer', 120000, 2),
    ('Account Manager', 110000, 3),
    ('Helpdesk', 80000, 4)
,

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Tim', 'Johnson', 1, 2),
    ('Sandra', 'Enciso', 2, 1),
    ('Steven', 'Rodriguez', 3, NULL),
    ('Bravo', 'Kao', 4, 3)
,
