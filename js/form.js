const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const inputAdvertTitle = form.querySelector('#title');
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
  const price = form.querySelector('#price');
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

const initValidation = () => {
  checkMaxPrice();
  checkRoomsCapacity();
};

const deactivePage = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
};

const activePage = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
};

deactivePage();
activePage();

export {initValidation};
