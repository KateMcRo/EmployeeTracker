const inquirer = require("inquirer");

// move this to constants
const options = [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee",
    ]

async function userTask() {
        const {input} = await inquirer.prompt([
            {
                type: "list",
                name: "input",
                message: "What would you like to do?",
                choices: options
            }
        ]); 
        console.log("You chose: ", input)
}

userTask();