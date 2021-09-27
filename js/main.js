function getRandomNumber (min, max) {
  if (min < 0 || min >= max) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomNumber();

function getFloatingNumber (min, max, decimalPoint) {
  if (min < 0 || min >= max) {
    return false;
  }
  const randomNumber = Math.random() * (max - min + 1) + min;
  return +randomNumber.toFixed(decimalPoint);
}

getFloatingNumber();
