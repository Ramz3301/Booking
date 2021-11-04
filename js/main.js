import { clearForm, initValidation } from './form.js';
import { downloadMap } from './map.js';
import { setUserFormSubmit } from './form.js';

initValidation();
fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((advertisements) => {
    downloadMap(advertisements);
  });
setUserFormSubmit();
clearForm();
