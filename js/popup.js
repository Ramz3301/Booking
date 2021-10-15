import { getSimilarAdverts } from './data';

const similarAdvertsTemplate = document.querySelector('#card').content; // Берём содержимое template
const popup = similarAdvertsTemplate.querySelector('popup'); // Будем это вставлять, шаблон
const similarElement = document.querySelector('#map-canvas'); // Сюда будем вставлять шаблон
const popupAddress = popup.querySelector('.popup__text--address');
const popupPrice = popup.querySelector('.popup__text--price');
const popupType = popup.querySelector('.popup__type');
const popupCapacity = popup.querySelector('.popup__capacity');
const popupTime = popup.querySelector('.popup__text--time');
const popupFeatures = popup.querySelector('.popup__features');
const popupDescription = popup.querySelector('.popup__description');
const popupPhotos = popup.querySelector('.popup__photos');
const popupAvatar = popup.querySelector('.popup__avatar');
const similarAdverts = getSimilarAdverts();


const TYPE_OF_PROMISES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};


const similarAdvert = () => {
  similarAdverts.forEach((author, offer, location) => {
    const advertElement = popup.cloneNode(true);
    advertElement.querySelector('.popup__title').textContent = offer.title;
    similarElement.appendChild(advertElement);
  });
};

similarAdvert(similarAdverts);

export {similarAdvert};
