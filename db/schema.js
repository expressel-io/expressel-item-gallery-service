const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

connection.connect();

// Create database
connection.query('CREATE DATABASE IF NOT EXISTS items;', (error) => {
  if (error) throw error;
  console.log('Database Created!');
});

// Use the newly-created database
connection.query('USE items;', (error) => {
  if (error) throw error;
  console.log('Using Item Database!');
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
  Item_Lowest_Price CHAR(1) NOT NULL,
  Item_Rating DECIMAL NOT NULL,
  PRIMARY KEY (Item_ID)
);`, (error) => {
  if (error) throw error;
  console.log('Table Created!');
});

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
  'Images/fullsize/macbook/silver/13Silver.jpg,Images/fullsize/macbook/silver/13Silver2.jpg,Images/fullsize/macbook/silver/15Silver2.jpg,Images/fullsize/macbook/silver/15Silver3.jpg,Images/fullsize/macbook/silver/15Silver4.jpg',
  'Images/fullsize/macbook/space_grey/13SpaceGrey.jpg,Images/fullsize/macbook/space_grey/13SpaceGrey2.jpg,Images/fullsize/macbook/space_grey/13SpaceGrey3.jpg,Images/fullsize/macbook/space_grey/13SpaceGrey4.jpg,Images/fullsize/macbook/space_grey/15SpaceGrey.jpg,Images/fullsize/macbook/space_grey/15SpaceGrey2.jpg',
  'Images/thumbnails/macbook/silver/13Silver.jpg,Images/thumbnails/macbook/silver/13Silver2.jpg,Images/thumbnails/macbook/silver/15Silver2.jpg,Images/thumbnails/macbook/silver/15Silver3.jpg,Images/thumbnails/macbook/silver/15Silver4.jpg',
  'Images/thumbnails/macbook/space_grey/13SpaceGrey.jpg,Images/thumbnails/macbook/space_grey/13SpaceGrey2.jpg,Images/thumbnails/macbook/space_grey/13SpaceGrey3.jpg,Images/thumbnails/macbook/space_grey/13SpaceGrey4.jpg,Images/thumbnails/macbook/space_grey/15SpaceGrey.jpg,Images/thumbnails/macbook/space_grey/15SpaceGrey2.jpg',
  'Images/button_image/macbook/silver/15Silver2_thumb.jpg',
  'Images/button_image/macbook/space_grey/15SpaceGrey2_thumb.jpg',
  '13-Inch,15-Inch',
  'n',
  2129
);`, (error) => {
  if (error) throw error;
  console.log('MacBook Data Created!');
});
