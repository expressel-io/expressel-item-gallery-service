const dataGenerationFunctions = require('../db/schema');

const { createDummyData } = dataGenerationFunctions;
const { createItemOptions } = dataGenerationFunctions;
const { createFolderAndImageNumber } = dataGenerationFunctions;
const { createImagePath } = dataGenerationFunctions;
const { createThumbnailPath } = dataGenerationFunctions;
const { createButtonPath } = dataGenerationFunctions;
const { escapeSingleQuotes } = dataGenerationFunctions;

describe('createItemOptions', () => {

  test('Will return a string', () => {
    let output = createItemOptions(1);
    expect(typeof output).toBeTruthy();
  });

  test('String should not end with a comma + space if one options is provided', () => {
    let output = createItemOptions(1);
    expect(output).not.toMatch(/, /);
  });

  test('String should not end with a space if more than one option is recieved', () => {
    let output = createItemOptions(2);
    expect(output[output.length-1]).not.toMatch(/ /);
  });
});
