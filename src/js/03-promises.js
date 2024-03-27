import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(e) {
  e.preventDefault();

  // const form = e.target;
  // const firstDelay = form.elements.delay.value;
  // const stepDelay = form.elements.step.value;
  // const amount = form.elements.amount.value;

  const { delay, step, amount } = e.target.elements;

  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i, delayValue)
      .then(({ position, delay }) =>
        iziToast.success({
          title: `✅ Fulfilled promise ${position} in ${delay}ms`,
        })
      )
      .catch(({ position, delay }) =>
        iziToast.error({
          title: `❌ Rejected promise ${position} in ${delay}ms`,
        })
      );

    delayValue += stepValue;
  }
  form.reset();
}
