const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

connection.connect();

connection.query('USE items;', (error) => {
  if (error) throw error;
});

// This function will split the image filepath string into an array
// of filepaths.
const convertStringToArray = (string) => {
  const resultArray = string.split(',');
  if (resultArray[resultArray.length - 1] === '') {
    resultArray.pop();
  }
  return resultArray;
};
