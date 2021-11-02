import { getRandomPositiveFloat, getRandomPositiveInteger, sample } from './utils.js';

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const SIMILAR_ADS_COUNT = 10;
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const authors = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const LATITUDE = {
  min: 35.65,
  max: 35.7,
  decimals: 5,
};
const LONGITUDE = {
  min: 139.7,
  max: 139.8,
  decimals: 5,
};

const getRandomLocation = () => ({
  lat: getRandomPositiveFloat(LATITUDE.min,LATITUDE.max, LATITUDE.decimals),
  lng: getRandomPositiveFloat(LONGITUDE.min, LONGITUDE.max, LONGITUDE.decimals),
});

const createAdvert = () => {
  const location = getRandomLocation();
  return {
    author: {
      avatar: `img/avatars/user${ String((authors).shift()).padStart(2,0) }.png`,
    },
    offer: {
      title: 'Жильё поблизости',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(70000, 200000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(1, 8),
      guests: getRandomPositiveInteger(1, 10),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: sample(FEATURES),
      description: 'Уютное место для жилья в прекрасном городе Токио',
      photos: sample(PHOTOS),
    },
    location,
  };
};

const getSimilarAdverts = () => {
  const adverts = [];
  for (let index = 0; index < SIMILAR_ADS_COUNT; index++) {
    adverts.push(createAdvert());
  }
  return adverts;
};

export {getSimilarAdverts};
