import { initValidation, setUserFormSubmit } from './form.js';
import { downloadMap, resetFormButton } from './map.js';
import { getData } from './api.js';
import { createSuccessMessage } from './popup.js';
import { showAlert } from './utils.js';

const SIMILAR_ADVERTS_COUNT = 10;

initValidation();
getData((adverts) => {
  downloadMap(adverts.slice(0, SIMILAR_ADVERTS_COUNT));
}, showAlert);
setUserFormSubmit(createSuccessMessage);
resetFormButton();
