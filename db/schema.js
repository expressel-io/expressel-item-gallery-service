const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

connection.connect();

// Create database
connection.query('CREATE DATABASE IF NOT EXISTS items;', (error) => {
  if (error) throw error;
});

// Use the newly-created database
connection.query('USE items;', (error) => {
  if (error) throw error;
});

// Create table 'items'
connection.query(`CREATE TABLE IF NOT EXISTS items (
  Item_ID INTEGER NOT NULL AUTO_INCREMENT,
  Item_Name VARCHAR(500) NOT NULL,
  Item_Description LONGTEXT NOT NULL,
  Item_Color_1 VARCHAR(50) NOT NULL,
  Item_Color_2 VARCHAR(50) NOT NULL,
  Item_Color_1_Images LONGTEXT NOT NULL,
  Item_Color_2_Images LONGTEXT NOT NULL,
  Item_Color_1_Thumbnails LONGTEXT NOT NULL,
  Item_Color_2_Thumbnails LONGTEXT NOT NULL,
  Item_Color_1_Button_Image LONGTEXT NOT NULL,
  Item_Color_2_Button_Image LONGTEXT NOT NULL,
  Item_Options VARCHAR(500) NOT NULL,
  Item_Lowest_Price CHAR(5) NOT NULL,
  Item_Rating DECIMAL NOT NULL,
  PRIMARY KEY (Item_ID)
);`, (error) => {
  if (error) throw error;
});


// Each item in our database should contain some number of images, thumbnails, and button icons.
// These images can be found within 'src\Images'.
// Each of the three subfolders contain the same images,
// with the only difference being their aspect ratio. As the dummy data is generated, paths to
// image files are created and stored.
const createDummyData = (numberOfRecords) => {
  for (let n = 0; n < numberOfRecords; n += 1) {
    let itemName = faker.fake('{{lorem.words}}');
    let itemDescription = faker.fake('{{lorem.paragraph}}');
    let itemColor1Images = '';
    let itemColor2Images = '';
    let itemColor1Thumbnails = '';
    let itemColor2Thumbnails = '';
    let itemColor1ButtonImage = '';
    let itemColor2ButtonImage = '';
    let itemOptions = '';
    const randomOptionNumber = Math.floor(Math.random() * Math.floor(5) + 1);
    const itemColor1 = faker.fake('{{lorem.word}}');
    const itemColor2 = faker.fake('{{lorem.word}}');
    const itemLowestPrice = faker.fake('{{random.boolean}}');
    const itemRating = faker.fake('{{random.number}}');

    // Escaping of single quotes was necessary for MySQL:
    if (itemDescription.indexOf("'") !== -1) {
      const modifiedDesciption = itemDescription.replace(/'/g, "''");
      itemDescription = modifiedDesciption;
    }

    // Escaping of single quotes was necessary for MySQL:
    if (itemName.indexOf("'") !== -1) {
      const modifiedName = itemName.replace(/'/g, "''");
      itemName = modifiedName;
    }

    for (let i = 0; i < 2; i += 1) {
      if (i < randomOptionNumber) {
        itemOptions += `${faker.fake('{{hacker.adjective}}')}, `;
      } else {
        itemOptions += `${faker.fake('{{hacker.adjective}}')}`;
      }
    }

    // Create a randomized number of picture links for each one of the colors
    for (let color = 0; color <= 2; color += 1) {
      const randomPictureCount = Math.floor(Math.random() * Math.floor(5) + 1);

      if (color < 1) {
        for (let picture = 0; picture < randomPictureCount; picture += 1) {
          const randomFolderNumber = Math.floor(Math.random() * Math.floor(20) + 1);
          const randomImageNumber = Math.floor(Math.random() * Math.floor(20) + 1);
          itemColor1Images += `images/fullsize/images_${randomFolderNumber}/image-${randomImageNumber}.jpg,`;
          itemColor1Thumbnails += `images/thumbnails/images_${randomFolderNumber}/image-${randomImageNumber}_thumb.jpg,`;
          itemColor1ButtonImage = `images/button_image/images_${randomFolderNumber}/image-${randomImageNumber}_thumb.jpg,`;
        }
      } else {
        for (let picture = 0; picture < randomPictureCount; picture += 1) {
          const randomFolderNumber = Math.floor(Math.random() * Math.floor(20) + 1);
          const randomImageNumber = Math.floor(Math.random() * Math.floor(20) + 1);
          itemColor2Images += `images/fullsize/images_${randomFolderNumber}/image-${randomImageNumber}.jpg,`;
          itemColor2Thumbnails += `images/thumbnails/images_${randomFolderNumber}/image-${randomImageNumber}_thumb.jpg,`;
          itemColor2ButtonImage = `images/button_image/images_${randomFolderNumber}/image-${randomImageNumber}_thumb.jpg,`;
        }
      }
    }

    connection.query(`INSERT INTO items (
      Item_Name,
      Item_Description,
      Item_Color_1,
      Item_Color_2,
      Item_Color_1_Images,
      Item_Color_2_Images,
      Item_Color_1_Thumbnails,
      Item_Color_2_Thumbnails,
      Item_Color_1_Button_Image,
      Item_Color_2_Button_Image,
      Item_Options,
      Item_Lowest_Price,
      Item_Rating
    ) VALUES (
    '${itemName}',
    '${itemDescription}',
    '${itemColor1}',
    '${itemColor2}',
    '${itemColor1Images}',
    '${itemColor2Images}',
    '${itemColor1Thumbnails}',
    '${itemColor2Thumbnails}',
    '${itemColor1ButtonImage}',
    '${itemColor2ButtonImage}',
    '${itemOptions}',
    '${itemLowestPrice}',
    '${itemRating}');`, (error) => {
      if (error) throw error;
    });
  }
};

// Insert MacBook Pro Mock Data
connection.query(`INSERT INTO items (
  Item_Name,
  Item_Description,
  Item_Color_1,
  Item_Color_2,
  Item_Color_1_Images,
  Item_Color_2_Images,
  Item_Color_1_Thumbnails,
  Item_Color_2_Thumbnails,
  Item_Color_1_Button_Image,
  Item_Color_2_Button_Image,
  Item_Options,
  Item_Lowest_Price,
  Item_Rating
  ) VALUES (
  'Apple MacBook Pro - Core i7 2.8 GHz - 16 GB RAM - 256 GB SSD',
  'It''s razor thin, feather light, and even faster and more powerful than before. It has a bright, colorful notebook display. And it features the Touch Bar - a multi-touch enabled strip of glass built into the keyboard for instant access to the tools you want, right when you want them. MacBook Pro is built on groundbreaking ideas. And it''s ready for yours.',
  'Silver',
  'Space Grey',
  'images/fullsize/macbook/silver/13Silver.jpg,images/fullsize/macbook/silver/13Silver2.jpg,images/fullsize/macbook/silver/15Silver2.jpg,images/fullsize/macbook/silver/15Silver3.jpg,images/fullsize/macbook/silver/15Silver4.jpg',
  'images/fullsize/macbook/space_grey/13SpaceGrey.jpg,images/fullsize/macbook/space_grey/13SpaceGrey2.jpg,images/fullsize/macbook/space_grey/13SpaceGrey3.jpg,images/fullsize/macbook/space_grey/13SpaceGrey4.jpg,images/fullsize/macbook/space_grey/15SpaceGrey.jpg,images/fullsize/macbook/space_grey/15SpaceGrey2.jpg',
  'images/thumbnails/macbook/silver/13Silver.jpg,images/thumbnails/macbook/silver/13Silver2.jpg,images/thumbnails/macbook/silver/15Silver2.jpg,images/thumbnails/macbook/silver/15Silver3.jpg,images/thumbnails/macbook/silver/15Silver4.jpg',
  'images/thumbnails/macbook/space_grey/13SpaceGrey.jpg,images/thumbnails/macbook/space_grey/13SpaceGrey2.jpg,images/thumbnails/macbook/space_grey/13SpaceGrey3.jpg,images/thumbnails/macbook/space_grey/13SpaceGrey4.jpg,images/thumbnails/macbook/space_grey/15SpaceGrey.jpg,images/thumbnails/macbook/space_grey/15SpaceGrey2.jpg',
  'images/button_image/macbook/silver/15Silver2_thumb.jpg',
  'images/button_image/macbook/space_grey/15SpaceGrey2_thumb.jpg',
  '13-Inch,15-Inch',
  'false',
  2129
);`, (error) => {
  if (error) throw error;
  // Once database, table, and MackBook data is has been completed,
  // call createDummyData to generate remaining documents:
  createDummyData(99);
});
