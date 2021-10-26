const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const form = document.querySelector('.ad-form');
const inputAdvertTitle = form.querySelector('#title');
const capacitySelect = form.querySelector('#capacity');
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

function checkMaxPrice() {
  price.addEventListener('input', () => {
    if (price.value > 1000000) {
      price.setCustomValidity('Максимальное значение - 1000000');
    } else {
      price.setCustomValidity('');
    }
  });
}

function checkRoomsCapacity () {
  const capacityOption = capacitySelect.querySelectorAll('option');
  const roomSelect = form.querySelector('#room_number');
  capacityOption[0].setAttribute('disabled', 'disabled');
  capacityOption[1].setAttribute('disabled', 'disabled');
  capacityOption[3].setAttribute('disabled', 'disabled');
  roomSelect.addEventListener('change', function () {
    const valueNumber = this.value;
    if (valueNumber === '1') {
      capacityOption[0].setAttribute('disabled', 'disabled');
      capacityOption[1].setAttribute('disabled', 'disabled');
      capacityOption[2].removeAttribute('disabled');
      capacityOption[3].setAttribute('disabled', 'disabled');
    } else if (valueNumber === '2') {
      capacityOption[1].removeAttribute('disabled');
      capacityOption[2].removeAttribute('disabled');
      capacityOption[0].setAttribute('disabled', 'disabled');
      capacityOption[3].setAttribute('disabled', 'disabled');
    } else if (valueNumber === '3') {
      capacityOption[0].removeAttribute('disabled');
      capacityOption[1].removeAttribute('disabled');
      capacityOption[2].removeAttribute('disabled');
      capacityOption[3].setAttribute('disabled', 'disabled');
    } else if (valueNumber === '100') {
      capacityOption[0].setAttribute('disabled', 'disabled');
      capacityOption[1].setAttribute('disabled', 'disabled');
      capacityOption[2].setAttribute('disabled', 'disabled');
      capacityOption[3].removeAttribute('disabled');
    }
    capacitySelect.setCustomValidity('');
  });
}

export {checkMaxPrice};
export {checkRoomsCapacity};
