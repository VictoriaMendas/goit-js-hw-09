import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve('hi');
    } else {
      reject('goodbye');
    }
  });
  return promise;
}

const createSubmitForm = document.querySelector('.form');

createSubmitForm.addEventListener('submit', onBtnClickSubmitForm);

function onBtnClickSubmitForm(e) {
  console.log(e.target);
  setTimeout(() => {
    createPromise(100, 1000)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, 1000);
}
