const ALERT_SHOW_TIME = 5000;

function getRandomPositiveInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger();

function getRandomPositiveFloat (min, max, digits = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(max), Math.abs(min));

  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

getRandomPositiveFloat();


function shuffle(elements) {
  let currentIndex = elements.length, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [elements[currentIndex], elements[randomIndex]] = [elements[randomIndex], elements[currentIndex]];
  }

  return elements;
}

function sample(elements) {
  return shuffle(elements).slice(getRandomPositiveInteger(0, elements.length - 1), elements.length);
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomPositiveInteger, getRandomPositiveFloat, sample, showAlert, isEscapeKey};
