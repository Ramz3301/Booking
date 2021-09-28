function getRandomInRange (min, max) {
  if (min < 0 || min >= max) {
    return false;
  }
  return Math.random() * (max - min) + min;
}

function getRandomInteger (min, max) {
  return Math.ceil(getRandomInRange(min, max));
}

getRandomInteger();

function getFloatingNumber (min, max, decimalPoint) {
  return Number(getRandomInRange(min, max).toFixed(decimalPoint));
}

getFloatingNumber();
