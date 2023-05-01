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

const departmentArray = [];

const departments = async () => {
    const data = await db.promise().query(GET_ALL_DEPARTMENTS);
    const [result] = data;
    const departmentArray = result.map(department => ({
      // allows me to use the names for the inquirer prompt
      name: department.name,
      // grants access to the dep. id to add to the db
      value: department.id
    }));
    return departmentArray;
  };

let roleArray;

const roles = async () => {
    const data = await db.promise().query(GET_ALL_ROLES);
    const [result] = data;
    const roleArray = result.map(roles => ({
      name: roles.job_title,
      value: roles.role_id
    }));
    return roleArray;
};

departments()
roles()

module.exports = {
    options,
    departmentArray,
    roleArray
}