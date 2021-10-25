const MIN_NAME_LENGTH = 30;
const MAX_NAME_LENGTH = 100;
const advertInputTitle = document.querySelector('#title');

// advertInputTitle.addEventListener('invalid', () => {
//   if (advertInputTitle.validity.tooShort) {
//     advertInputTitle.setCustomValidity('Объявление должно состоять минимум из 30 симв.');
//   } else if (advertInputTitle.validity.tooLong) {
//     advertInputTitle.setCustomValidity('Объявление не должно превышать 100 симв.');
//   } else if (advertInputTitle.validity.valueMissing) {
//     advertInputTitle.setCustomValidity('Обязательное поле');
//   } else {
//     advertInputTitle.setCustomValidity('');
//   }
// });

// advertInputTitle();

advertInputTitle.addEventListener('input', () => {
  const valueLength = advertInputTitle.value.length;
  if (valueLength < MIN_NAME_LENGTH) {
    advertInputTitle.setCustomValidity(`Ещё ${ MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    advertInputTitle.setCustomValidity(`Удалите лишние ${ valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    advertInputTitle.setCustomValidity('');
  }
  advertInputTitle.reportValidity();
});
