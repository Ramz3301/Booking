import { initValidation, setUserFormSubmit } from './form.js';
import { downloadMap, resetFormButton } from './map.js';
import { getData } from './api.js';
import { createSuccessMessage } from './popup.js';
import { showAlert } from './utils.js';
import './filter.js';

initValidation();
getData((adverts) => {
  downloadMap(adverts);
}, showAlert);
setUserFormSubmit(createSuccessMessage);
resetFormButton();
