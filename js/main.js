function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

getRandomPositiveInteger();

function getRandomPositiveFloat (min, max, digits = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(digits));
}

getRandomPositiveFloat();

const AUTHOR = {
  avatar: `img/avatars/user${  getRandomPositiveInteger(1, 10)  }.png`,
};

const locationA = {
  lat: getRandomPositiveFloat(35.65, 35.7, 5),
  lng: getRandomPositiveFloat(139.7, 139.8, 5),
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function getArray() {
  const maxLength = FEATURES.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const array = [];

  // eslint-disable-next-line id-length
  for(let i = 0; i < lengthOfArray; i++) {
    const indexOfEl = getRandomPositiveInteger(0, 5);
    const el = FEATURES[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

getArray();

const offer = {
  title: 'Тип жилья',
  address: locationA.lat + ' ' + locationA.lng,
  price: getRandomPositiveInteger(70000, 200000),
  type: getRandomArrayElement(TYPE),
  rooms: getRandomPositiveInteger(1, 8),
  guests: getRandomPositiveInteger(1, 16),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: getArray(),
  description: 'Уютное место для жилья в прекрасном городе Токио',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'],
};

const SIMILAR_ADS_COUNT = 10;

const createAdvert = () => ({
  author: AUTHOR,
  offer: offer,
  location: locationA,
});

createAdvert();

const similarAds = Array.from({length: SIMILAR_ADS_COUNT}, createAdvert);

similarAds;
