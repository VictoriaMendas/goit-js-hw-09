const feedbackForm = document.querySelector('.feedback-form');

const { email, message } = feedbackForm.elements;
feedbackForm.addEventListener('submit', onClickSubmitBtn);
feedbackForm.addEventListener('input', onInputChanged);

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateForm();

function onInputChanged(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

// console.log(parseItems);
function onClickSubmitBtn(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert(`Fill all filed`);
  }
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);

  formData = {};
}
