USE employees;

INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Sales');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Lead', 50000, 4),
    ('Salesperson', 45000, 4),
    ('Lead Engineer', 60000, 1),
    ('Software Engineer', 65000, 1),
    ('Account Manager', 70000, 2),
    ('Accountant', 55000, 2),
    ('Legal Team Lead', 75000, 3),
    ('Lawyer', 70000, 3);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES
    ('Jeff', 'Grauzer', 3, 1),
    ('Matt', 'Gerrill', 2, 2),
    ('Matt', 'Valdez', 6, 3),
    ('Jason', 'Gonzales', 5, 1),
    ('Doug', 'Werner', 1, 2),
    ('Emilio', 'Estevez', 4, 3),
    ('Judelyn', 'Gibson', 5, 2),
    ('Lori', 'Gallardo', 4, 4),
    ('Jason', 'Trott', 3, 3),
    ('Lori', 'McCutcheon', 5, 4),
    ('Maribel', 'Perez', 2, 1),
    ('Mike', 'McReynolds', 4, 3),
    ('Gabe', 'Velez', 5, 2),
    ('Natalie', 'Gaitan', 4, 4),
    ('Adrienne', 'Wong', 6, 1);