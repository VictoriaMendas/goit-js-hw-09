import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      Notiflix.Promise.resolve('Weelcooom');
    } else {
      Notiflix.Promise.reject('goodbye');
    }
  });
}

const createSubmitForm = document.querySelector('.form');

createSubmitForm.addEventListener('submit', onBtnClickSubmitForm);

function onBtnClickSubmitForm(e) {
  e.preventDefault();

  const form = e.target;
  const firstDelay = form.elements.delay.value;
  const stepDelay = form.elements.step.value;
  const amount = form.elements.amount.value;
  console.log`${firstDelay}:${stepDelay}:${amount}`;
  // createPromise(100, 1000)
  //     .then(({ position, delay }) => {
  //       // Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //     })
  //     .catch(({ position, delay }) => {
  //       //Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //     });
  // }, 1000);
}
