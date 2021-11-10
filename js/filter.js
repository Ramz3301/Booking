import { downloadMap } from './map.js';
// import { debounce } from './utils/debounce.js';

const DEFAULT_VALUE = 'any';
const housingTypeSelect = document.querySelector('#housing-type');
// const priceSelect = document.querySelector('#housing-price');
// const guestsSelect = document.querySelector('#housing-guests');

const filterAdverts = (adverts) => {
  housingTypeSelect.addEventListener('change', () => {
    if (housingTypeSelect.value === DEFAULT_VALUE) {
      downloadMap(adverts);
    } else {
      const filterAdvertisements = adverts.filter((object) => object.offer.type === housingTypeSelect.value);
      downloadMap(filterAdvertisements);
    }
  });
};

export {filterAdverts};
