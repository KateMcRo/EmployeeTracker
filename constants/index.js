const db = require("../config/connection")
const {GET_ALL_DEPARTMENTS, GET_ALL_ROLES, GET_ALL_EMPLOYEES} = require("../queries")

// used in initial inquirer prompt
const options = [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee",
    ]

const departmentObj = [];

const departments = async () => {
    const data = await db.promise().query(GET_ALL_DEPARTMENTS);
    const [result] = data;
    const departmentObj = result.map(department => ({
      // allows me to use the names for the inquirer prompt
      name: department.name,
      // grants access to the dep. id to add to the db
      value: department.id
    }));
    return departmentObj;
  };

departments()

    module.exports = {
        options,
        departmentObj
    }