import Notiflix from "notiflix"

const firstDelay = document.querySelector('input[name=delay]')
const delayStep = document.querySelector('input[name=step]')
const amount = document.querySelector('input[name=amount]')

const start = document.querySelector('button[type=submit]')

start.addEventListener('click', (event) => {
  event.preventDefault()
  setTimeout(() => {
    let promise = createPromise(1, 0)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      })

    for (let i = 2; i <= amount.valueAsNumber; i++) {
      promise = promise
        .then(() => createPromise(i, delayStep.valueAsNumber))
        .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
        })
    }
  }, firstDelay.valueAsNumber)
})

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({position, delay})
      }, delay)
    })
  } else {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject({position, delay})
      }, delay)
    })
  }
}
