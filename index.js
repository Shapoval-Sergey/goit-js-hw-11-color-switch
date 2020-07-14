const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let number = null;
let changeNumber = null;

function onClickStart() {
  if (changeNumber) {
    return;
  }
  changeNumber = setInterval(() => {
    number = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[number];
  }, 1000);
  refs.start.setAttribute('disabled', true);
  refs.stop.removeAttribute('disabled');
}

function onClickStop() {
  clearInterval(changeNumber);
  changeNumber = null;
  refs.stop.setAttribute('disabled', true);
  refs.start.removeAttribute('disabled');
}

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);
