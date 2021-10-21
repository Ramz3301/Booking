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

const createPhoto = (photoArray) => {
  const photoContainer = similarAdvertsTemplate.querySelector('.popup__photos');
  const photoFragment = document.createDocumentFragment();
  photoArray.forEach(() => {
    const photoItem  = photoContainer.querySelector('.popup__photo');
    if (photoItem) {
      photoFragment.append(photoItem);
    }
  });
  photoContainer.innerHTML = '';
  photoContainer.append(photoFragment);
};

// const createPhoto = (photoArray) => {
//   const photoContainer = similarAdvertsTemplate.querySelector('.popup__photos');
//   const photoList = photoContainer.querySelector('.popup__photo');
//   // const photoFragment = document.createDocumentFragment();
//   photoList.forEach((photoItem) => {
//     const isNecessary = photoArray.some(
//       () => photoItem.classList.contains('popup__photo'),
//     );

//     if (!isNecessary) {
//       photoItem.remove();
//     }
//   });
// };


const createFeatures = (offer) => {
  const featuresContainer = similarAdvertsTemplate.querySelector('.popup__features');
  const featuresListFragment = document.createDocumentFragment();
  offer.forEach((feature) => {
    const featureItem = featuresContainer.querySelector(`.popup__feature--${feature}`);
    if (featureItem) {
      featuresListFragment.append(featureItem);
    }
  });
  featuresContainer.innerHTML = '';
  featuresContainer.append(featuresListFragment);
};

// const createFeatures = (offer) => {
//   const featuresContainer = similarAdvertsTemplate.querySelector('.popup__features');
//   const featuresList = featuresContainer.querySelectorAll('.popup__feature');
//   const modifiers = offer.map((feature) => `popup__feature--${feature}`);
//   featuresList.forEach ((featuresListItem) => {
//     const modifier = featuresListItem.classList[1];

//     if (!modifiers.includes(modifier)) {
//       featuresListItem.remove();
//     }
//   });
// };

// const hideEmptyElements = (data) => {
//   const elements  = [...data.children];
//   elements.forEach((element) => {
//     if (!element) {
//       element.classList.add('hidden');
//     }
//   });
// };

const getSimilarAdvert = (similarAdvert) => {
  similarAdvert.forEach(({author, offer}) => {
    advertElement.querySelector('.popup__title').textContent = offer.title;
    advertElement.querySelector('.popup__text--address').textContent = offer.address;
    advertElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    advertElement.querySelector('.popup__type').textContent = convertType(offer);
    advertElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    advertElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    advertElement.querySelector('.popup__description').textContent = offer.description;
    advertElement.querySelector('.popup__photos').innerHTML = '';
    advertElement.querySelector('.popup__features').innerHTML = '';
    createFeatures(offer);
    createPhoto(offer);
    advertElement.querySelector('.popup__avatar').src = author.avatar;
  });
};

similarListFragment.append(advertElement);
similarElement.appendChild(similarListFragment);

export {getSimilarAdvert};
