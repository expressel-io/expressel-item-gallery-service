// This is our test file. We tell just to use the mock version on line 4
import * as fetchData from '../server_functions_working/fetchData';

// jest.mock('../server_functions_working/server_request');
jest.mock('../server_functions_working/server_request', () => {}, { virtual: true });


// The assertion for a promise must be returned.
describe('/app/home Endpoint', () => {
  it('Should return macbook item name', () => {
    expect.assertions(1);
    return fetchData.getMacBookData().then(data => expect(data.itemName).toEqual('Apple MacBook Pro - Core i7 2.8 GHz - 16 GB RAM - 256 GB SSD'));
  });
  it('Should return macbook item description', () => {
    expect.assertions(1);
    return fetchData.getMacBookData().then(data => expect(data.itemDescription).toEqual('It\'s razor thin, feather light, and even faster and more powerful than before. It has a bright, colorful notebook display. And it features the Touch Bar - a multi-touch enabled strip of glass built into the keyboard for instant access to the tools you want, right when you want them. MacBook Pro is built on groundbreaking ideas. And it\'s ready for yours.'));
  });
  it('Should return macbook itemColor1', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemColor1).toEqual('Silver'));
  });
  it('Should return macbook itemColor2', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemColor2).toEqual('Space Grey'));
  });
  it('Should return macbook itemLowestPrice', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemLowestPrice).toEqual('true'));
  });
  it('Should return macbook itemRating', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemRating).toEqual('2,129'));
  });
  it('Should return macbook itemColor1Images', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemColor1Images[0]).toEqual('images/fullsize/macbook/silver/13Silver.jpg'));
  });
  it('Should return macbook itemColor2Images', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemColor2Images[0]).toEqual('images/fullsize/macbook/space_grey/13SpaceGrey.jpg'));
  });
  it('Should return macbook itemColor1Thumbnails', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemColor1Thumbnails[0]).toEqual('images/thumbnails/macbook/silver/13Silver.jpg'));
  });
  it('Should return macbook itemColor2Thumbnails', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemColor2Thumbnails[0]).toEqual('images/thumbnails/macbook/space_grey/13SpaceGrey.jpg'));
  });
  it('Should return macbook itemColor1ButtonImage', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemColor1ButtonImage[0]).toEqual('images/button_image/macbook/silver/15Silver2_thumb.jpg'));
  });
  it('Should return macbook itemColor2ButtonImage', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemColor2ButtonImage[0]).toEqual('images/button_image/macbook/space_grey/15SpaceGrey2_thumb.jpg'));
  });
  it('Should return macbook itemOptions', () => {
    return fetchData.getMacBookData().then(data => expect(data.itemOptions[0]).toEqual('13-Inch'));
  });
});

describe('app/product/50 Endpoint', () => {
  it('Should return an item name as a string', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(typeof data.itemName).toEqual('string'));
  });
  it('Should return an item description as a string', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(typeof data.itemDescription).toEqual('string'));
  });
  it('Should return an item description containing a period', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemDescription).toMatch(/./));
  });
  it('Should return an item color 1 as a string', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(typeof data.itemColor1).toEqual('string'));
  });
  it('Should return an item color 2 as a string', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(typeof data.itemColor2).toEqual('string'));
  });
  it('Should return a lowest price indicator', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemLowestPrice).toEqual('true'));
  });
  it('Should return itemColor1Images in string format', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemColor1Images[0]).toEqual('images/fullsize/images_16/image-20.jpg'));
  });
  it('Should return itemColor2Images in string format', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemColor2Images[0]).toEqual('images/fullsize/images_11/image-14.jpg'));
  });
  it('Should return itemColor1Thumbnails in string format', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemColor1Thumbnails[1]).toEqual('images/thumbnails/images_7/image-8_thumb.jpg'));
  });
  it('Should return itemColor2Thumbnails in string format', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemColor2Thumbnails[1]).toEqual('images/thumbnails/images_3/image-20_thumb.jpg'));
  });
  it('Should return itemColor1Buttons in string format', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemColor1ButtonImage[0]).toEqual('images/button_image/images_12/image-6_thumb.jpg'));
  });
  it('Should return itemColor2Buttons in string format', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemColor2ButtonImage[0]).toEqual('images/button_image/images_5/image-14_thumb.jpg'));
  });
  it('Should return itemOptions in string format', () => {
    expect.assertions(1);
    return fetchData.getDummyData().then(data => expect(data.itemOptions[0]).toEqual('cross-platform'));
  });
});
