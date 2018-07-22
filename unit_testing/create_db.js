const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

connection.query('SHOW databases;', (error, results) => {
  if (error) throw error;
  console.log(results);
});

connection.query('USE items;', (error, results) => {
  if (error) throw error;
  console.log(results);
});

connection.query('SHOW tables;', (error, results) => {
  if (error) throw error;
  console.log(results);
});
