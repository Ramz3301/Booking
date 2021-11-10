import { mapFilters, deleteMarkers } from './map.js';
// import { debounce } from './utils/debounce.js';

const DEFAULT_VALUE = 'any';
const housingTypeSelect = mapFilters.querySelector('#housing-type');

const chooseHousingType = (advert) => {
  if(housingTypeSelect.value === advert.offer.type || housingTypeSelect.value === DEFAULT_VALUE) {
    return true;
  }
  return false;
};

const filterData = (array) => {
  const arrayAfterFilter = array.filter(chooseHousingType);
};

const addFilterData = (cb) => {
  housingTypeSelect.addEventListener('change', () => {
    cb();
  });
};

addFilterData(filterData);

export {addFilterData};
