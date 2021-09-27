function getRandomNumber (min, max) {
  if (min < 0 || min >= max) {
    return false;
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

getRandomNumber();

function getFloatingNumber (min, max, decimalPoint) {
  if (min < 0 || min >= max) {
    return false;
  } else {
    const randomNumber = Math.random() * (max - min + 1) + min;
    return randomNumber.toFixed(decimalPoint);
  }
}

getFloatingNumber();
