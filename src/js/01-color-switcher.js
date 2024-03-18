function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonStart = document.querySelector(".startBtn");
const buttonStop = document.querySelector(".stopBtn");

let intervalId = null;

buttonStop.disabled = true;

buttonStart.addEventListener("click", onStartClickBtn);
buttonStop.addEventListener("click", onStopBtnClick);

function onStartClickBtn() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  buttonStart.disabled = false;
  buttonStop.disabled = true;
  clearInterval(intervalId);
}
