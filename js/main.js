import { initValidation, setUserFormSubmit } from './form.js';
import {  resetFormButton, downloadMap } from './map.js';
import { getData } from './api.js';
import { createSuccessMessage } from './popup.js';
import { showAlert } from './utils.js';
import { filterAdverts } from './filter.js';

initValidation();
getData((adverts) => {
  downloadMap(adverts);
  filterAdverts(adverts);
}, showAlert);
setUserFormSubmit(createSuccessMessage);
resetFormButton();
