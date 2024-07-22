const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'myjsprojects.database.azure.com',
  user: 'admin',
  password: 'JackHackMySQL2024!',
  database: 'JSProjectsDB'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id', connection.threadId);
});

module.exports = connection;
