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

// When provided an item ID, this function will query the items table and return
// all results for that item. It will then create an object which will hold the converted results.
// Conversion is necessary to convert the file path strings into arrays of file path strings.
// These arrays will then be used to generate image components within the client.
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
    return convertedResults;
  });
};

module.exports = {
  pullItemInfo,
};
