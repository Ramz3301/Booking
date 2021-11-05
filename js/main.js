import { initValidation, setUserFormSubmit } from './form.js';
import { downloadMap,clearForm } from './map.js';
import { getData } from './api.js';


initValidation();
getData((adverts) =>{
  downloadMap(adverts);
});
setUserFormSubmit(clearForm()); // не понимаю, почему при успешной отправке не очищается форма
