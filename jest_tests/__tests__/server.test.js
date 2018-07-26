// This is our test file. We tell just to use the mock version on line 4
import * as user from '../server_functions_working/user';

jest.mock('../server_functions_working/request');


// The assertion for a promise must be returned.
describe('/app/home Endpoint', () => {
  it('Should return macbook item name', () => {
    expect.assertions(1);
    return user.getMacBookData().then(data => expect(data.itemName).toEqual('Apple MacBook Pro - Core i7 2.8 GHz - 16 GB RAM - 256 GB SSD'));
  });
  it('Should return macbook item description', () => {
    expect.assertions(1);
    return user.getMacBookData().then(data => expect(data.itemDescription).toEqual('It\'s razor thin, feather light, and even faster and more powerful than before. It has a bright, colorful notebook display. And it features the Touch Bar - a multi-touch enabled strip of glass built into the keyboard for instant access to the tools you want, right when you want them. MacBook Pro is built on groundbreaking ideas. And it\'s ready for yours.'));
  });
  it('Should return macbook itemColor1', () => {
    return user.getMacBookData().then(data => expect(data.itemColor1).toEqual('Silver'));
  });
  it('Should return macbook itemColor2', () => {
    return user.getMacBookData().then(data => expect(data.itemColor2).toEqual('Space Grey'));
  });
  it('Should return macbook itemLowestPrice', () => {
    return user.getMacBookData().then(data => expect(data.itemLowestPrice).toEqual('true'));
  });
  it('Should return macbook itemRating', () => {
    return user.getMacBookData().then(data => expect(data.itemRating).toEqual('2,129'));
  });
  it('Should return macbook itemColor1Images', () => {
    return user.getMacBookData().then(data => expect(data.itemColor1Images[0]).toEqual('images/fullsize/macbook/silver/13Silver.jpg'));
  });
  it('Should return macbook itemColor2Images', () => {
    return user.getMacBookData().then(data => expect(data.itemColor2Images[0]).toEqual('images/fullsize/macbook/space_grey/13SpaceGrey.jpg'));
  });
  it('Should return macbook itemColor1Thumbnails', () => {
    return user.getMacBookData().then(data => expect(data.itemColor1Thumbnails[0]).toEqual('images/thumbnails/macbook/silver/13Silver.jpg'));
  });
  it('Should return macbook itemColor2Thumbnails', () => {
    return user.getMacBookData().then(data => expect(data.itemColor2Thumbnails[0]).toEqual('images/thumbnails/macbook/space_grey/13SpaceGrey.jpg'));
  });
  it('Should return macbook itemColor1ButtonImage', () => {
    return user.getMacBookData().then(data => expect(data.itemColor1ButtonImage[0]).toEqual('images/button_image/macbook/silver/15Silver2_thumb.jpg'));
  });
  it('Should return macbook itemColor2ButtonImage', () => {
    return user.getMacBookData().then(data => expect(data.itemColor2ButtonImage[0]).toEqual('images/button_image/macbook/space_grey/15SpaceGrey2_thumb.jpg'));
  });
  it('Should return macbook itemOptions', () => {
    return user.getMacBookData().then(data => expect(data.itemOptions[0]).toEqual('13-Inch'));
  });

});