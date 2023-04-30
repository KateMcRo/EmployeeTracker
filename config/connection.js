require("dotenv").config();
const mysql = require('mysql2'); 

// create a connection to the database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: 'Sammichs0x',
      database: 'company_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

// connect to the database 
db.connect((err) => { if (err) {console.log(err.message) 
    throw err} console.log('Connected to MySQL database'); });
    
module.exports = db 