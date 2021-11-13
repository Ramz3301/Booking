import { initValidation, setUserFormSubmit } from './form.js';
import {  resetFormButton, downloadMap } from './map.js';
import { getData } from './api.js';
import { createSuccessMessage } from './popup.js';
import { showAlert } from './utils.js';
import {  setFilterListener } from './filter.js';
import { data } from './data.js';

initValidation();
getData((adverts) => {
  setFilterListener(adverts);
  downloadMap(adverts);
  data.adverts = adverts;
}, showAlert);
setUserFormSubmit(createSuccessMessage);
resetFormButton();
