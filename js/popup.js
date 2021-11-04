const similarAdvertsTemplate = document.querySelector('#card').content.querySelector('.popup'); // Шаблон

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
  const photoContainer = element.querySelector('.popup__photos');
  photoContainer.innerHTML = '';
  const photoItem = document.createElement('img');
  photos.forEach((photoSource) => {
    photoItem.src = photoSource;
    photoItem.classList.add('popup__photo');
    photoItem.width = 45;
    photoItem.height = 40;
    photoItem.alt = 'Фотография жилья';
    photoContainer.append(photoItem);
  });
};

const createFeatures = (element, features) => {
  const featuresContainer = element.querySelector('.popup__features');
  featuresContainer.innerHTML = '';
  features.forEach((feature) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${feature}`);
    featuresContainer.append(featureItem);
  });
};

const createSimilarAdvert = ({author, offer}) => {
  const advertElement = similarAdvertsTemplate.cloneNode(true);
  advertElement.querySelector('.popup__avatar').src = author.avatar;
  advertElement.querySelector('.popup__title').textContent = offer.title;
  advertElement.querySelector('.popup__text--address').textContent = offer.address;
  advertElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  advertElement.querySelector('.popup__type').textContent = convertType(offer);
  advertElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  advertElement.querySelector('.popup__description').textContent = offer.description;
  // createFeatures(advertElement, offer.features);
  // createPhoto(advertElement, offer.photos);
  return advertElement;
};

export {createSimilarAdvert};
