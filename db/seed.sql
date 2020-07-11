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
    ('Helpdesk', 80000, 4),
    
