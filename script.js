/* VARIABLES */

const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

const errors = [];



form.addEventListener("submit", (event) => {
  event.preventDefault();

  errors.lenght = 0;

  caract(username, 5, 10);
  caract(password, 8, 15);
  checkSameValue(password, password2)
  checkEmail(email);
  
})


/* FUNCTIONS */

function checkRequired(input) {
  if (!input.value.trim().length) {
    showError(input, `This field is required`);
  } else {
    showSuccess(input, 'succes');
  }
}

function caract(input, min, max) {
  if (input.value.trim().length < min || input.value.trim().length > max) {
    showError(input, `this field length is not correct`);
  } else {
    showSuccess(input, 'success');
  }
}


function checkSameValue(input1, input2) {
  if (input1.value !== input2.value || !input2.value.length) {
    showError(input2, `Passwords don't match`);
  } else {
    showSuccess(input2, 'success');
  }
}

function checkEmail(input) {

  if (
    !email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    showError(input, `Must be a valid email`);
  } else {
    showSuccess(email, 'success');
  }
};


function showError(input, message) {
  input.parentElement.classList = "form-control error ";
  input.nextElementSibling.textContent = message;
}

function showSuccess(input, message) {
  input.parentElement.classList = "form-control success";
  input.nextElementSibling.textContent = message;
};




