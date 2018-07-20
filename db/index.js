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

const pullItemInfo = (itemID) => {
  connection.query('SELECT * FROM items WHERE Item_ID = ?', [itemID], (error, results) => {
    if (error) throw error;
    const data = results[0];
    const convertedResults = {};
    convertedResults.itemName = data.Item_Name;
    convertedResults.itemDescription = data.Item_Description;
    convertedResults.itemColor1 = data.Item_Color_1;
    convertedResults.itemColor2 = data.Item_Color_2;
    convertedResults.itemLowestPrice = data.Item_Lowest_Price;
    convertedResults.itemRating = data.Item_Rating;
  });
};

module.exports = {
  convertStringToArray,
  pullItemInfo,
};
