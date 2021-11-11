import { downloadMap } from './map.js';
import { debounce } from './utils/debounce.js';

const DEFAULT_VALUE = 'any';
const mapFilters = document.querySelector('.map__filters');
const housingTypeSelect = mapFilters.querySelector('#housing-type');
const roomsSelect = mapFilters.querySelector('#housing-rooms');
const guestsSelect = mapFilters.querySelector('#housing-guests');
const featuresFieldset = mapFilters.querySelector('#housing-features');
const priceSelect = mapFilters.querySelector('#housing-price');
const price = {
  low: {
    min: 0,
    max: 10000,
  },
  middle: {
    min: 10000,
    max: 50000,
  },
  high: {
    min: 50000,
    max: Infinity,
  },
  any: {
    min:0,
    max: Infinity,
  },
};

const selectedType = (advert) => housingTypeSelect.value === advert.offer.type || housingTypeSelect.value  === DEFAULT_VALUE;
const selectedRooms = (advert) => +roomsSelect.value === advert.offer.rooms || roomsSelect.value === DEFAULT_VALUE;
const selectedGuests = (advert) => +guestsSelect.value === advert.offer.guests || guestsSelect.value === DEFAULT_VALUE;
const selectedPrice = (point) => {
  switch (priceSelect.value) {
    case 'low':
      return point.offer.price < price.low.max;
    case 'middle':
      return point.offer.price >= price.middle.min && point.offer.price < price.middle.max;
    case 'high':
      return point.offer.price >= price.high.min;
    case DEFAULT_VALUE:
      return true;
    default:
      return false;
  }
};
const selectedFeatures = (advert) => {
  const checkedFeatures = featuresFieldset.querySelectorAll('[name="features"]:checked');
  const featuresArray = [];

  if (advert.offer.features) {
    checkedFeatures.forEach((element) => {
      featuresArray.push(element.value);
    });
    return featuresArray.every((element) => advert.offer.features.includes(element));
  }
};

const filterAdverts = (adverts) => adverts.filter((advert) => selectedType(advert) && selectedRooms(advert) && selectedGuests(advert) && selectedPrice(advert) && selectedFeatures(advert));

const createFilteredAdverts = (adverts) => {
  const filteredAdverts = filterAdverts(adverts);
  downloadMap(filteredAdverts);
};

const setFilterListener = (adverts) => {
  mapFilters.addEventListener('change', debounce(() => createFilteredAdverts(adverts)));
};

export {setFilterListener};
