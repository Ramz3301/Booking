import { downloadMap } from './map.js';
import { debounce } from './utils/debounce.js';

const DEFAULT_VALUE = 'any';
const mapFilters = document.querySelector('.map__filters');
const housingTypeSelect = mapFilters.querySelector('#housing-type');
const roomsSelect = mapFilters.querySelector('#housing-rooms');
const guestsSelect = mapFilters.querySelector('#housing-guests');

const selectedType = (advert) => housingTypeSelect.value === advert.offer.type || housingTypeSelect.value  === DEFAULT_VALUE;
const selectedRooms = (advert) => +roomsSelect.value === advert.offer.rooms || roomsSelect.value === DEFAULT_VALUE;
const selectedGuests = (advert) => +guestsSelect.value === advert.offer.guests || guestsSelect.value === DEFAULT_VALUE;

const filterAdverts = (adverts) => adverts.filter((advert) => selectedType(advert) && selectedRooms(advert) && selectedGuests(advert));

const createFilteredAdverts = (adverts) => {
  const filteredAdverts = filterAdverts(adverts);
  downloadMap(filteredAdverts);
};

const setFilterListener = (adverts) => {
  mapFilters.addEventListener('change', debounce(() => createFilteredAdverts(adverts)));
};

export {setFilterListener};
