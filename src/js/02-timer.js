// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = Date.now();
    const selectedDate = selectedDates[0].getTime();
    const timeDifference = selectedDate - currentDate;
    console.log(selectedDate);
    console.log(timeDifference);
    if (timeDifference <= 0) {
      alert('Please choose a date in the future');
    } else {
      buttonStart.disabled = false;
    }
  },
};

// Non-module environments
const dateTimePicker = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('button[data-start]');
const valueDays = document.querySelector('.value[data-days]');
const valueHours = document.querySelector('.value[data-hours]');
const valueMinutes = document.querySelector('.value[data-minutes]');
const valueSeconds = document.querySelector('.value[data-seconds]');

buttonStart.addEventListener('click', onStartClickBtn);

const datePicker = flatpickr(dateTimePicker, options);
buttonStart.disabled = true;

function onStartClickBtn(e) {
  const timerId = setInterval(() => {
    const currentDate = Date.now();
    const selectedDate = datePicker.selectedDates[0].getTime();
    const timeDifference = selectedDate - currentDate;
    const timeObj = convertMs(timeDifference);
    valueSeconds.innerHTML = addLeadingZero(timeObj.seconds);
    valueMinutes.innerHTML = addLeadingZero(timeObj.minutes);
    valueHours.innerHTML = addLeadingZero(timeObj.hours);
    valueDays.innerHTML = addLeadingZero(timeObj.days);
    buttonStart.disabled = true;

    if (timeDifference <= 0) {
      clearInterval(timerId);
      alert('Our discount time is finita lia comedia:)');
      return;
    }
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
