import { downloadMap, mapFilters} from './map.js';
// import { debounce } from './utils/debounce.js';

const DEFAULT_VALUE = 'any';
const housingTypeSelect = mapFilters.querySelector('#housing-type');

const filterOffers = (adverts) => {
  housingTypeSelect.addEventListener('change', () => {
    if (housingTypeSelect.value === DEFAULT_VALUE) {
      downloadMap(adverts);
    } else {
      const filterAdverts = adverts.filter((ad) => ad.offer.type === housingTypeSelect.value);
      downloadMap(filterAdverts);
    }
  });
};

export {filterOffers};
