import { mapFilters } from './map.js';
// import { debounce } from './utils/debounce.js';


const DEFAULT_VALUE = 'any';
const housingType = mapFilters.querySelector('#housing-type').value;

const chooseHousingType = (advert) => housingType === advert.offer.type || housingType === DEFAULT_VALUE;

