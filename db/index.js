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
    convertedResults.itemColor1Images = convertStringToArray(data.Item_Color_1_Images);
    convertedResults.itemColor2Images = convertStringToArray(data.Item_Color_2_Images);
    convertedResults.itemColor1Thumbnails = convertStringToArray(data.Item_Color_1_Thumbnails);
    convertedResults.itemColor2Thumbnails = convertStringToArray(data.Item_Color_2_Thumbnails);
    convertedResults.itemColor1ButtonImage = convertStringToArray(data.Item_Color_1_Button_Image);
    convertedResults.itemColor2ButtonImage = convertStringToArray(data.Item_Color_2_Button_Image);
    convertedResults.itemOptions = convertStringToArray(data.Item_Options);
    console.log('The current results are: ', convertedResults)
  });
};

module.exports = {
  pullItemInfo,
};
