const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let isActive = true;
const refs = {
  startBtn: document.querySelector('button[data-action = start]'),
  stopBtn: document.querySelector('button[data-action = stop]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorSwitch = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      document.body.style.background =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.intervalId = null;
  },
};

refs.startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));
