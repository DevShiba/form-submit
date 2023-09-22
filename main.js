const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const setFieldStatus = (element, message, isSuccess) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = isSuccess ? "" : message;
  inputControl.classList.toggle("error", !isSuccess);
  inputControl.classList.toggle("success", isSuccess);
};

const isValidEmail = (email) => {
  return emailRegex.test(String(email).toLowerCase());
};

const validateUsername = () => {
  const usernameValue = username.value.trim();
  if (!usernameValue) {
    setFieldStatus(username, "Username is required", false);
  } else {
    setFieldStatus(username, "", true);
  }
};

const validateEmail = () => {
  const emailValue = email.value.trim();
  if (!emailValue) {
    setFieldStatus(email, "Email is required", false);
  } else if (!isValidEmail(emailValue)) {
    setFieldStatus(email, "Please provide a valid email address", false);
  } else {
    setFieldStatus(email, "", true);
  }
};

const validatePassword = () => {
  const passwordValue = password.value.trim();
  if (!passwordValue) {
    setFieldStatus(password, "Password is required", false);
  } else if (passwordValue.length < 8) {
    setFieldStatus(password, "Password must be at least 8 characters.", false);
  } else {
    setFieldStatus(password, "", true);
  }
};

const validatePassword2 = () => {
  const password2Value = password2.value.trim();
  if (!password2Value) {
    setFieldStatus(password2, "Please confirm your password", false);
  } else if (password2Value !== password.value.trim()) {
    setFieldStatus(password2, "Passwords do not match", false);
  } else {
    setFieldStatus(password2, "", true);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateUsername();
  validateEmail();
  validatePassword();
  validatePassword2();
});
