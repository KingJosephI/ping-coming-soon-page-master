const emailInput = document.getElementById('email');
const btnSubmit = document.getElementById('submit');
const errorMessage = document.getElementById('error-message');
const validEmailPattern =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
errorMessage.style.display = 'none';

emailInput.addEventListener('input', () => {
  errorMessage.style.display = 'none';
  emailInput.style.outline = '1px solid #C2D3FF';
});

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  if (emailInput.value.match(validEmailPattern)) {
    alert('Your email has been registered');
  } else {
    errorMessage.style.display = 'block';
    emailInput.style.outline = '1px solid red';
  }
});
