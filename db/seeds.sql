/* Department Seeds */
INSERT INTO departments (name) VALUES ('Engineering'), ('Sales'), ('Marketing');

/* Role Seeds */
INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 150000.00, 1),
('Sales Manager', 80000.00, 2),
('Marketing Coordinator', 70000.00, 3),
('Software Grunt', 75000.00, 1),
('Sales Underling', 40000.00, 2),
('Marketing Pawn', 50000.00, 3);

/* Employee Seeds */
INSERT INTO employees (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Jwayne', 'Dohnson', 3, null),
(2, 'Elom', 'Nusk', 1, null),
(3, 'Beff', 'Jezos', 2, null),
(4, 'Bobert', 'Rowney Jr.', 5, 1),
(5, 'Gill', 'Bates', 4, 2),
(6, 'Bustin', 'Jeiber', 6, 3);
