const form = document.getElementById('form');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submit-button');

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const errorMessage = inputContainer.querySelector('#error-message');

  // add error message
  errorMessage.innerText = message;
  errorMessage.style.display = 'block';
  input.classList.toggle('error__border');
}

function checkInput() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email, 'Whoops! It looks like you forgot to add your email');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Please provide a valid email address');
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInput();
});
