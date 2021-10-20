const similarAdvertsTemplate = document.querySelector('#card').content.querySelector('.popup'); // Шаблон
const similarElement = document.querySelector('#map-canvas'); // Сюда будем вставлять шаблон
const advertElement = similarAdvertsTemplate.cloneNode(true);

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
      return 'hotel';
  }
};

const similarListFragment = document.createDocumentFragment();

const getPhoto = (offer) => {
  const photoContainer = similarAdvertsTemplate.querySelector('.popup__photos');
  // const photoFragment = document.createDocumentFragment();
  photoContainer.innerHTML = '';

  offer.photos.forEach((some) => {
    const photoItem = document.createElement('img');
    photoItem.src = some;
    photoItem.classList.add('popup__photo');
    photoItem.width = 45;
    photoItem.height = 40;
    photoItem.alt = 'Фотография жилья';
    photoContainer.append(photoItem);
  });
};

const hideDescription = (offer) => {
  if (!offer.description) {
    advertElement.querySelector('.popup__description').style = 'display: none';
  }
};

const getSimilarAdvert = (some) => {
  some.forEach(({author, offer}) => {
    advertElement.querySelector('.popup__title').textContent = offer.title;
    advertElement.querySelector('.popup__text--address').textContent = offer.address;
    advertElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    advertElement.querySelector('.popup__type').textContent = convertType(offer);
    advertElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    advertElement.querySelector('.popup__features').textContent = offer.features;
    advertElement.querySelector('.popup__description').textContent = offer.description;
    hideDescription(offer);
    getPhoto(offer);
    advertElement.querySelector('.popup__avatar').src = author.avatar;
  });
};

similarListFragment.append(advertElement);
similarElement.appendChild(similarListFragment);

export {getSimilarAdvert};
