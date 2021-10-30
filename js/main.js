import { createSimilarAdvert } from './popup.js';
import { getSimilarAdverts } from './data.js';
import { getRandomPositiveInteger } from './utils.js';
import { initValidation } from './form.js';

const similarAdverts = getSimilarAdverts();
createSimilarAdvert(similarAdverts[getRandomPositiveInteger(0,9)]);
initValidation();
