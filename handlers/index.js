const inquirer = require("inquirer")
const db = require("../config/connection")
const constants = require("../constants");
module.exports = {GET_ALL_DEPARTMENTS, GET_ALL_ROLES, GET_ALL_EMPLOYEES, ADD_DEPARTMENT, ADD_ROLE, ADD_EMPLOYEE} = require("../queries")

// View functions
const handleViewDepartments = async () => {
   const data = await db.promise().query(GET_ALL_DEPARTMENTS)
   const [result] = data
   return result
}

const handleViewRoles = async () => {
    const data = await db.promise().query(GET_ALL_ROLES)
    const [result] = data
    return result
}

const handleViewEmployees = async () => {
    const data = await db.promise().query(GET_ALL_EMPLOYEES)
    const [result] = data
    return result
}

// Add Functions
const handleAddDepartment = async () => {
    const {department} = await inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What is the department name?"
        }
    ])
    const departmentTableObj = { name: department}

    await db.promise().query(ADD_DEPARTMENT, departmentTableObj)
    return department
}

const handleAddRole = async () => {
    console.log("viewing roles")
    const departments = await db.promise().query(GET_ALL_DEPARTMENTS)
    const departmentObj = departments[0].map(department => ({ name: department.name, value: department.id }))
    const { role, title, salary, department_id } = await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the name of this role?"
        },
        {
            type: "number",
            name: "salary",
            message: "What is the salary for this role?"
        },
        {
            type: "list",
            name: "department_id",
            message: "Which department does this role belong to?",
            choices: departmentObj
        }
    ]);

    await db.promise().query(ADD_ROLE, [title, salary, department_id]);
    console.log("Role added successfully!")
}


const handleAddEmployee = () => {
    console.log("viewing employees")
}

module.exports = {handleViewDepartments, handleViewRoles, handleViewEmployees, handleAddDepartment, handleAddRole, handleAddEmployee}