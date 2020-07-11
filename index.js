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

let indexArr = null;
let number = null;
let changeNumber = null;

function onClickStart() {
  if (changeNumber) {
    return;
  }
  changeNumber = setInterval(() => {
    number = randomIntegerFromInterval(0, colors.length - 1);
    for (let i = 0; i < colors.length; i += 1) {
      const element = colors[i];
      indexArr = colors.indexOf(element);
      indexArr = number;
    }
    refs.body.style.backgroundColor = colors[indexArr];
  }, 1000);
}

function onClickStop() {
  clearInterval(changeNumber);
  changeNumber = null;
}

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);
