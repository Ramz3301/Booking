import { downloadMap, mapFilters} from './map.js';
// import { debounce } from './utils/debounce.js';

const DEFAULT_VALUE = 'any';
const housingTypeSelect = mapFilters.querySelector('#housing-type');

const filterOffers = (ads) => {
  housingTypeSelect.addEventListener('change', () => {
    if (housingTypeSelect.value === DEFAULT_VALUE) {
      downloadMap(ads);
    } else {
      const filteredAds = ads.filter((ad) => ad.offer.type === housingTypeSelect.value);
      downloadMap(filteredAds);
    }
  });
};

export {filterOffers};
