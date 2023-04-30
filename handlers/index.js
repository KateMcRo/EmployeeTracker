const inquirer = require("inquirer")
const db = require("../config/connection")
const {GET_ALL_DEPARTMENTS, ADD_DEPARTMENT} = require("../queries")

const handleViewDepartments = async () => {
   const data = await db.promise().query(GET_ALL_DEPARTMENTS)
   const [result] = data
   return result
}

const handleViewRoles = () => {
    ("viewing roles")
}

const handleViewEmployees = () => {
    console.log("viewing employees")
}

const handleAddDepartment = async () => {
    console.log("viewing departments")
    const {department} = await inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What is the deaprtment name?"
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