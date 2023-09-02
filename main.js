const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.textContent = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  return emailRegex.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  const validateField = (field, value, errorMessage) => {
    if (!value) {
      setError(field, errorMessage);
    } else {
      setSuccess(field);
    }
  };

  validateField(username, usernameValue, "Username is required");
  validateField(email, emailValue, "Email is required");
  if (emailValue && !isValidEmail(emailValue)) {
    setError(email, "Please provide a valid email address");
  }
  validateField(password, passwordValue, "Password is required");
  if (passwordValue && passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
  }
  validateField(password2, password2Value, "Please confirm your password");
  if (password2Value && password2Value !== passwordValue) {
    setError(password2, "Passwords do not match");
  }
};
