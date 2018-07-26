const macBookProData = {
  itemName: 'Apple MacBook Pro - Core i7 2.8 GHz - 16 GB RAM - 256 GB SSD',
  itemDescription: 'It\'s razor thin, feather light, and even faster and more powerful than before. It has a bright, colorful notebook display. And it features the Touch Bar - a multi-touch enabled strip of glass built into the keyboard for instant access to the tools you want, right when you want them. MacBook Pro is built on groundbreaking ideas. And it\'s ready for yours.',
  itemColor1: 'Silver',
  itemColor2: 'Space Grey',
  itemLowestPrice: 'true',
  itemRating: '2,129',
  itemColor1Images: [
    'images/fullsize/macbook/silver/13Silver.jpg',
    'images/fullsize/macbook/silver/13Silver2.jpg',
    'images/fullsize/macbook/silver/15Silver2.jpg',
    'images/fullsize/macbook/silver/15Silver3.jpg',
    'images/fullsize/macbook/silver/15Silver4.jpg',
  ],
  itemColor2Images: [
    'images/fullsize/macbook/space_grey/13SpaceGrey.jpg',
    'images/fullsize/macbook/space_grey/13SpaceGrey2.jpg',
    'images/fullsize/macbook/space_grey/13SpaceGrey3.jpg',
    'images/fullsize/macbook/space_grey/13SpaceGrey4.jpg',
    'images/fullsize/macbook/space_grey/15SpaceGrey.jpg',
    'images/fullsize/macbook/space_grey/15SpaceGrey2.jpg',
  ],
  itemColor1Thumbnails: [
    'images/thumbnails/macbook/silver/13Silver.jpg',
    'images/thumbnails/macbook/silver/13Silver2.jpg',
    'images/thumbnails/macbook/silver/15Silver2.jpg',
    'images/thumbnails/macbook/silver/15Silver3.jpg',
    'images/thumbnails/macbook/silver/15Silver4.jpg',
  ],
  itemColor2Thumbnails: [
    'images/thumbnails/macbook/space_grey/13SpaceGrey.jpg',
    'images/thumbnails/macbook/space_grey/13SpaceGrey2.jpg',
    'images/thumbnails/macbook/space_grey/13SpaceGrey3.jpg',
    'images/thumbnails/macbook/space_grey/13SpaceGrey4.jpg',
    'images/thumbnails/macbook/space_grey/15SpaceGrey.jpg',
    'images/thumbnails/macbook/space_grey/15SpaceGrey2.jpg',
  ],
  itemColor1ButtonImage: [
    'images/button_image/macbook/silver/15Silver2_thumb.jpg',
  ],
  itemColor2ButtonImage: [
    'images/button_image/macbook/space_grey/15SpaceGrey2_thumb.jpg',
  ],
  itemOptions: [
    '13-Inch',
    '15-Inch',
  ],
};

const dummyData = {
  itemName: 'consectetur nulla eum',
  itemDescription: 'Eligendi cum illum ducimus harum aut sint. Suscipit consectetur dolorem est inventore earum sequi. Aut enim excepturi. Fuga sed voluptatem consectetur consequuntur rerum tempora reprehenderit facere. Iusto repellat et.',
  itemColor1: 'atque',
  itemColor2: 'ab',
  itemLowestPrice: 'true',
  itemRating: '8,268',
  itemColor1Images: [
    'images/fullsize/images_16/image-20.jpg',
    'images/fullsize/images_7/image-8.jpg',
    'images/fullsize/images_12/image-6.jpg',
  ],
  itemColor2Images: [
    'images/fullsize/images_11/image-14.jpg',
    'images/fullsize/images_3/image-20.jpg',
    'images/fullsize/images_2/image-11.jpg',
    'images/fullsize/images_7/image-10.jpg',
    'images/fullsize/images_19/image-4.jpg',
    'images/fullsize/images_6/image-13.jpg',
    'images/fullsize/images_3/image-4.jpg',
    'images/fullsize/images_5/image-1.jpg',
    'images/fullsize/images_16/image-13.jpg',
    'images/fullsize/images_5/image-14.jpg',
  ],
  itemColor1Thumbnails: [
    'images/thumbnails/images_16/image-20_thumb.jpg',
    'images/thumbnails/images_7/image-8_thumb.jpg',
    'images/thumbnails/images_12/image-6_thumb.jpg',
  ],
  itemColor2Thumbnails: [
    'images/thumbnails/images_11/image-14_thumb.jpg',
    'images/thumbnails/images_3/image-20_thumb.jpg',
    'images/thumbnails/images_2/image-11_thumb.jpg',
    'images/thumbnails/images_7/image-10_thumb.jpg',
    'images/thumbnails/images_19/image-4_thumb.jpg',
    'images/thumbnails/images_6/image-13_thumb.jpg',
    'images/thumbnails/images_3/image-4_thumb.jpg',
    'images/thumbnails/images_5/image-1_thumb.jpg',
    'images/thumbnails/images_16/image-13_thumb.jpg',
    'images/thumbnails/images_5/image-14_thumb.jpg',
  ],
  itemColor1ButtonImage: [
    'images/button_image/images_12/image-6_thumb.jpg',
  ],
  itemColor2ButtonImage: [
    'images/button_image/images_5/image-14_thumb.jpg',
  ],
  itemOptions: [
    'cross-platform',
    ' 1080p',
  ],
};

export default function request(url) {
  return new Promise((resolve, reject) => {
    if (url === '/app/home') {
      resolve(macBookProData);
    } else if (url === 'app/product/50') {
      resolve(dummyData);
    } else {
      reject(new Error('Sorry, the URL in invalid.'));
    }
  });
}
