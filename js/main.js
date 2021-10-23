import { createSimilarAdvert } from './popup.js';
import { getSimilarAdverts } from './data.js';
import { getRandomPositiveInteger } from './utils.js';

const similarAdverts = getSimilarAdverts();
createSimilarAdvert(similarAdverts[getRandomPositiveInteger(0,9)]);
