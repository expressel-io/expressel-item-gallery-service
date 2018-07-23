const mysql = require('mysql');
const dataGenerationFunctions = require('../db/schema');

const { createItemOptions } = dataGenerationFunctions;
const { createFolderAndImageNumber } = dataGenerationFunctions;
const { createImagePath } = dataGenerationFunctions;
const { createThumbnailPath } = dataGenerationFunctions;
const { createButtonPath } = dataGenerationFunctions;
const { escapeSingleQuotes } = dataGenerationFunctions;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

describe('createItemOptions', () => {
  test('Will return a string', () => {
    const output = createItemOptions(1);
    expect(typeof output).toBeTruthy();
  });

  test('String should not end with a comma + space if one options is provided', () => {
    const output = createItemOptions(1);
    expect(output).not.toMatch(/, /);
  });

  test('String should not end with a space if more than one option is recieved', () => {
    const output = createItemOptions(2);
    expect(output[output.length - 1]).not.toMatch(/ /);
  });
});

describe('createFolderAndImageNumber', () => {
  test('Will return a number', () => {
    const output = createFolderAndImageNumber();
    expect(typeof output).toBe('number');
  });
  test('The returned number will be between one and 20', () => {
    const output = createFolderAndImageNumber();
    expect(output).toBeLessThan(21);
    expect(output).toBeGreaterThan(0);
  });
});

describe('createImagePath', () => {
  test('Should return a string', () => {
    const output = createImagePath(2, 6);
    expect(typeof output).toBe('string');
  });
  test('Exported path should contain the passed-in folder and image numbers', () => {
    const output = createImagePath(2, 6);
    expect(output).toMatch('images_2');
    expect(output).toMatch('image-6');
  });
});

describe('createThumbnailPath', () => {
  test('Should return a string', () => {
    const output = createThumbnailPath(2, 6);
    expect(typeof output).toBe('string');
  });
  test('Exported path should contain the passed-in folder and image numbers', () => {
    const output = createThumbnailPath(2, 6);
    expect(output).toMatch('images_2');
    expect(output).toMatch('image-6');
  });
});

describe('createButtonPath', () => {
  test('Should return a string', () => {
    const output = createButtonPath(2, 6);
    expect(typeof output).toBe('string');
  });
  test('Exported path should contain the passed-in folder and image numbers', () => {
    const output = createButtonPath(2, 6);
    expect(output).toMatch('images_2');
    expect(output).toMatch('image-6');
  });
  test('Should only export one path (no commas or spaces)', () => {
    const output = createButtonPath(1, 6);
    expect(output).not.toMatch(',');
    expect(output).not.toMatch(' ');
  });
});

describe('escapeSingleQuotes', () => {
  test('Should return a string', () => {
    const output = escapeSingleQuotes('This is a test string');
    expect(typeof output).toBe('string');
  });
  test('Should replace single quotes with two single quotes where they appear', () => {
    const output = escapeSingleQuotes('Cal\'s cooking is the best when he is drinking his friends\' beer');
    expect(output).toMatch('');
  });
});

describe('database population', () => {

  test('Should be able to connect to the table', (done) => {
    connection.query('USE items;', (error, result) => {
      if (error) throw error;
      expect(result).not.toBe(null);
      done();
    });
  });

  test('First row of the database should be the Macbook Pro', (done) => {
    connection.query('SELECT * FROM items WHERE Item_ID = 1;', (err, result) => {
      if (err) throw error;
      expect(result[0].Item_Name).toBe('');
      done();
    });
  });
});
