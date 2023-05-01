const GET_ALL_DEPARTMENTS = "SELECT * FROM departments"

const GET_ALL_ROLES = 
`SELECT roles.title AS job_title,
roles.id AS role_id,
departments.name AS department_name,
roles.salary AS role_salary
FROM roles
JOIN departments ON roles.department_id = departments.id;`

const GET_ALL_EMPLOYEES = 
`SELECT 
employees.id, 
CONCAT(employees.first_name, ' ', employees.last_name) AS employee_name,
roles.title AS title, 
departments.name AS department,
roles.salary AS salary,
CONCAT_WS(' ', manager.first_name, manager.last_name) AS manager
FROM employees 
JOIN roles ON employees.role_id = roles.id 
JOIN departments ON roles.department_id = departments.id
LEFT JOIN employees AS manager ON employees.manager_id = manager.id;
`

const ADD_DEPARTMENT = "INSERT INTO departments SET ?"

module.exports = {GET_ALL_DEPARTMENTS, GET_ALL_ROLES, GET_ALL_EMPLOYEES, ADD_DEPARTMENT}

