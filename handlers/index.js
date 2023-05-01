const inquirer = require("inquirer")
const db = require("../config/connection")
const {GET_ALL_DEPARTMENTS, ADD_DEPARTMENT, GET_ALL_ROLES, GET_ALL_EMPLOYEES} = require("../queries")

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
    console.log("viewing departments")
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

const handleAddRole = () => {
    console.log("viewing roles")
}

const handleAddEmployee = () => {
    console.log("viewing employees")
}

module.exports = {handleViewDepartments, handleViewRoles, handleViewEmployees, handleAddDepartment, handleAddRole, handleAddEmployee}