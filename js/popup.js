const similarAdvertsTemplate = document.querySelector('#card').content.querySelector('.popup'); // Шаблон
const similarElement = document.querySelector('#map-canvas'); // Сюда будем вставлять шаблон
const advertElement = similarAdvertsTemplate.cloneNode(true);
const similarListFragment = document.createDocumentFragment();

const convertType = (offer) => {
  switch (offer.type) {
    case 'flat':
      return 'Квартира';
    case 'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    case 'hotel':
      return 'Отель';
  }
};


const createPhoto = (element, photos) => {
  const photoContainer = similarAdvertsTemplate.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  const photoItem = document.createElement('img');
  photos.forEach((photoSource) => {
    photoItem.src = photoSource;
    photoItem.classList.add('popup__photo');
    photoItem.width = 45;
    photoItem.height = 40;
    photoItem.alt = 'Фотография жилья';
    element.querySelector('.popup__photos').append(photoItem);
    // photoContainer.append(photoItem);
  });
};

const createFeatures = (element, features) => {
  const featuresContainer = advertElement.querySelector('.popup__features');
  featuresContainer.innerHTML = '';
  features.forEach((feature) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${feature}`);
    element.querySelector('.popup__features').appendChild(featureItem);
  });
};

// const isEmpty = (value, htmlClass) => {
//   if (!value) {
//     advertElement.querySelector(htmlClass).classList.add('hidden');
//   }
// };

// const hideEmptyElement = (offer, value, htmlClass) => {
//   if (!offer.value) {
//     advertElement.querySelector(htmlClass).classList.add('hidden');
//   }
// };

const createSimilarAdvert = ({author, offer}) => {
  advertElement.querySelector('.popup__avatar').src = author.avatar;
  advertElement.querySelector('.popup__title').textContent = offer.title;
  advertElement.querySelector('.popup__text--address').textContent = offer.address;
  advertElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  advertElement.querySelector('.popup__type').textContent = convertType(offer);
  advertElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  advertElement.querySelector('.popup__description').textContent = offer.description;
  createFeatures(advertElement, offer.features);
  createPhoto(advertElement, offer.photos);
};

similarListFragment.append(advertElement);
similarElement.appendChild(similarListFragment);

export {createSimilarAdvert};
