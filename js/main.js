function getRandomNumber (min, max) {
  if (min < 0 || min >= max) {
    return false;
  } else {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

getRandomNumber(1, 10);
