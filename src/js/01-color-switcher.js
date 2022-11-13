function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')

const start = document.querySelector('button[data-start]')
const stop = document.querySelector('button[data-stop]')
stop.disabled = true

start.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor()
  window.interval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  }, 1000)
  start.disabled = true
  stop.disabled = false
})
stop.addEventListener('click', () => {
  clearInterval(window.interval)
  start.disabled = false
  stop.disabled = true
})

