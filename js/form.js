import { sendData } from './api.js';
import { createErrorMessage } from './popup.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersAll = mapFilters.querySelectorAll('.map__filter');
const mapFieldsets = mapFilters.querySelectorAll('fieldset');
const formFieldsets = form.querySelectorAll('fieldset');
const inputAdvertTitle = form.querySelector('#title');
const price = form.querySelector('#price');
inputAdvertTitle.addEventListener('input', () => {
  const valueLength = inputAdvertTitle.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    inputAdvertTitle.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    inputAdvertTitle.setCustomValidity(`Удалите лишние ${ valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    inputAdvertTitle.setCustomValidity('');
  }
  inputAdvertTitle.reportValidity();
});

const checkMaxPrice = () => {
  price.addEventListener('input', () => {
    if (price.value > 1000000) {
      price.setCustomValidity('Максимальное значение - 1000000');
    } else {
      price.setCustomValidity('');
    }
  });
};

const checkRoomsCapacity = () => {
  const roomSelect = form.querySelector('#room_number');
  const capacitySelect = form.querySelector('#capacity');
  const capacityOptions = capacitySelect.querySelectorAll('option');
  capacityOptions[0].setAttribute('disabled', 'disabled');
  capacityOptions[1].setAttribute('disabled', 'disabled');
  capacityOptions[3].setAttribute('disabled', 'disabled');
  roomSelect.addEventListener('change', function () {
    const valueNumber = this.value;
    if (valueNumber === '1') {
      capacityOptions[0].setAttribute('disabled', 'disabled');
      capacityOptions[1].setAttribute('disabled', 'disabled');
      capacityOptions[2].removeAttribute('disabled');
      capacityOptions[3].setAttribute('disabled', 'disabled');
      capacitySelect.value = capacityOptions[2].value;
    } else if (valueNumber === '2') {
      capacityOptions[1].removeAttribute('disabled');
      capacityOptions[2].removeAttribute('disabled');
      capacityOptions[0].setAttribute('disabled', 'disabled');
      capacityOptions[3].setAttribute('disabled', 'disabled');
      capacitySelect.value = capacityOptions[1].value;
    } else if (valueNumber === '3') {
      capacityOptions[0].removeAttribute('disabled');
      capacityOptions[1].removeAttribute('disabled');
      capacityOptions[2].removeAttribute('disabled');
      capacityOptions[3].setAttribute('disabled', 'disabled');
      capacitySelect.value = capacityOptions[0].value;
    } else if (valueNumber === '100') {
      capacityOptions[0].setAttribute('disabled', 'disabled');
      capacityOptions[1].setAttribute('disabled', 'disabled');
      capacityOptions[2].setAttribute('disabled', 'disabled');
      capacityOptions[3].removeAttribute('disabled');
      capacitySelect.value = capacityOptions[3].value;
    }
    capacitySelect.setCustomValidity('');
  });
};

const changeTimeSelect = () => {
  const timeFieldset = document.querySelector('.ad-form__element--time');
  const timeIn = timeFieldset.querySelector('#timein');
  const timeOut = timeFieldset.querySelector('#timeout');
  timeFieldset.addEventListener('change', (element) => {
    timeIn.value = element.target.value;
    timeOut.value = element.target.value;
  });
};

const changeMinPrice = () => {
  const MIN_PRICE = {
    bungalow: 0,
    flat: 1000,
    hotel: 3000,
    house: 5000,
    palace: 10000,
  };

  const typeOfHousing = document.querySelector('#type');
  typeOfHousing.addEventListener('change', () => {
    const priceSelect = MIN_PRICE[typeOfHousing.value];
    price.placeholder = priceSelect;
    price.min = priceSelect;
  });
};

const deactivatePage = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  mapFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  mapFiltersAll.forEach((element) => element.disabled = true);
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const activatePage = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  mapFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
  mapFiltersAll.forEach((element) =>{
    element.disabled = false;
  });
  formFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => createErrorMessage(),
      new FormData(evt.target),
    );
  });
};

const initValidation = () => {
  checkMaxPrice();
  checkRoomsCapacity();
  changeTimeSelect();
  changeMinPrice();
  deactivatePage();
};

export {initValidation, activatePage, setUserFormSubmit};
