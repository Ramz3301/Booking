const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const form = document.querySelector('.ad-form');
const inputAdvertTitle = form.querySelector('#title');
const roomSelect = form.querySelector('#room-number');
const capacitySelect = form.querySelector('#capacity');
const price = form.querySelector('#price');
const typeOfHousing = form.querySelector('#type');
const TYPE_MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

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

function checkMaxPrice() {
  price.addEventListener('invalid', () => {
    if (price.value > 1000000) {
      price.setCustomValidity('Максимальное значение - 1000000');
    } else {
      price.setCustomValidity('');
    }
  });
}

function checkRoomsCapacity () {
  const capacityOption = capacitySelect.querySelectorAll('option');
  roomSelect.addEventListener('change', function () {
    const valueNumber = this.value;
    if (valueNumber === '1') {
      capacityOption[0].style.display = 'none';
      capacityOption[1].style.display = 'none';
      capacityOption[2].style.display = 'inline';
      capacityOption[3].style.display = 'none';
    } else if (valueNumber === '2') {
      capacityOption[0].style.display = 'none';
      capacityOption[1].style.display = 'inline';
      capacityOption[2].style.display = 'inline';
      capacityOption[3].style.display = 'none';
    } else if (valueNumber === '3') {
      capacityOption[0].style.display = 'inline';
      capacityOption[1].style.display = 'inline';
      capacityOption[2].style.display = 'inline';
      capacityOption[3].style.display = 'none';
    } else if (valueNumber === '100') {
      capacityOption[0].style.display = 'none';
      capacityOption[1].style.display = 'none';
      capacityOption[2].style.display = 'none';
      capacityOption[3].style.display = 'inline';
    }
  });
}

export {checkMaxPrice};
export {checkRoomsCapacity};
