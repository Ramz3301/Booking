import { createSimilarAdvert } from './popup.js';
import { getSimilarAdverts } from './data.js';
import { getRandomPositiveInteger } from './utils.js';
import { checkMaxPrice } from './form.js';
import { checkRoomsCapacity } from './form.js';

const similarAdverts = getSimilarAdverts();
createSimilarAdvert(similarAdverts[getRandomPositiveInteger(0,9)]);
checkMaxPrice();
checkRoomsCapacity();
