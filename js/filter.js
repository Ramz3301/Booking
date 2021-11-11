import { downloadMap } from './map.js';
import { debounce } from './utils/debounce.js';

const DEFAULT_VALUE = 'any';
const mapFilters = document.querySelector('.map__filters');
const housingTypeSelect = mapFilters.querySelector('#housing-type');


const selectedType = (advert) => housingTypeSelect.value === advert.offer.type || housingTypeSelect.value  === DEFAULT_VALUE;

const filterAdverts = (adverts) => adverts.filter((advert) => selectedType(advert));

const createFilteredAdverts = (adverts) => {
  const filteredAdverts = filterAdverts(adverts);
  downloadMap(filteredAdverts);
};

const setFilterListener = (adverts) => {
  mapFilters.addEventListener('change', debounce(() => createFilteredAdverts(adverts)));
};

export {setFilterListener};
