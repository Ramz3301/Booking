function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomPositiveFloat (min, max, digits = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;

  return Number(result.toFixed(digits));
}

const AUTHOR = {
  avatar: `img/avatars/user${  getRandomPositiveInteger(1, 10)  }.png`,
};

const locationAddress = {
  lat: getRandomPositiveFloat(35.65, 35.7, 5),
  lng: getRandomPositiveFloat(139.7, 139.8, 5),
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const SIMILAR_ADS_COUNT = 10;
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

// https://qastack.ru/programming/2450954/how-to-randomize-shuffle-a-javascript-array Функция взята отсюда

function shuffle(elements) {
  let currentIndex = elements.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = elements[currentIndex];
    elements[currentIndex] = elements[randomIndex];
    elements[randomIndex] = temporaryValue;
  }

  return elements.slice(getRandomArrayElement(0, elements.length - 1), elements.length);
}

const offer = {
  title: 'Тип жилья',
  address: 'locationAddress.lat + locationAddress.lng',
  price: getRandomPositiveInteger(70000, 200000),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomPositiveInteger(1, 8),
  guests: getRandomPositiveInteger(1, 10),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: shuffle(FEATURES),
  description: 'Уютное место для жилья в прекрасном городе Токио',
  photos: shuffle(PHOTOS),
};

const createAdvert = () => ({
  author: AUTHOR,
  offer: offer,
  location: locationAddress,
});

const similarAds = Array.from({length: SIMILAR_ADS_COUNT}, createAdvert);

similarAds;
