function checkRange (min, max) {
  if (min < 0 || min >= max) {
    throw new Error('Недопустимый диапазон');
  }
}

function getRandomInteger (min, max) {
  checkRange(min, max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getFloatingNumber (min, max, decimalPoint) {
  checkRange(min, max);
  return Number((Math.random() * (max - min) + min).toFixed(decimalPoint));
}

getRandomInteger();
getFloatingNumber();
