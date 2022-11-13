import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
import Notiflix from 'notiflix'

flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: true,
    onClose(selectedDates) {
      if (Date.parse(selectedDates[0]) <= Date.parse(new Date())) {
        startBtn.disabled = true
        return Notiflix.Notify.failure('Please choose a date in the future')
      }
      startBtn.disabled = false
    }
})

const startBtn = document.querySelector('button[data-start]')
startBtn.disabled = true
const input = document.getElementById('datetime-picker')
const daysEl = document.querySelector('.value[data-days]')
const hoursEl = document.querySelector('.value[data-hours]')
const minutesEl = document.querySelector('.value[data-minutes]')
const secondsEl = document.querySelector('.value[data-seconds]')

startBtn.addEventListener('click', ({target}) => {
  target.disabled = true
  window.milliseconds = Date.parse(input.value) - Date.parse(new Date())

  const {days, hours, minutes, seconds} = addLeadingZero(convertMs(window.milliseconds))

  daysEl.innerText = days
  hoursEl.innerText = hours
  minutesEl.innerText = minutes
  secondsEl.innerText = seconds

  window.interval = setInterval(() => {
    window.milliseconds -= 1000
    
    const {days, hours, minutes, seconds} = addLeadingZero(convertMs(window.milliseconds))
  

    daysEl.innerText = days
    hoursEl.innerText = hours
    minutesEl.innerText = minutes
    secondsEl.innerText = seconds
  }, 1000)

  setTimeout(() => {
    clearInterval(window.interval)
    target.disabled = false
    secondsEl.innerText = '00'
  }, window.milliseconds)
})

function addLeadingZero(obj) {
  const copied = {...obj}
  for (const key in copied) {
    if (typeof copied[key] === 'number') {
      copied[key] = copied[key].toString().padStart(2, '0')
    }
  }
  return copied
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