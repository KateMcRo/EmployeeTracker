const inquirer = require('inquirer')
const constants = require("../constants");
const {handleViewDepartments, handleViewRoles, handleViewEmployees, handleAddDepartment, handleAddRole, handleAddEmployee} = require("../handlers")

const prompt = async() => {
    const {input} = await inquirer.prompt([
        {
            type: "list",
            name: "input",
            message: "What would you like to do?",
            choices: constants.options
        }
    ]); 
    console.log("You chose: ", input)
    switch(input) {
        case "View all departments": {
            const result = await handleViewDepartments()
            console.table(result)
            return prompt()
        }
        case "View all roles": {
            const result = await handleViewRoles()
            console.table(result)
            return prompt()
        }
        case "View all employees": {
            const result = await handleViewEmployees()
            console.table(result)
            return prompt()
        }
        case "Add a department": {
            try {
                const department = await handleAddDepartment()
                console.log(`successfully added ${department} to table`)
            } catch (error){
                console.error(`There was an error adding ${department} to table, please try again.`)
            }
            finally {
                return prompt()
            }
        }
        case "Add a role": {
            return handleAddRole()
        }
        case "Add an employee": {
            return handleAddEmployee()
        }
    }

}

module.exports = prompt