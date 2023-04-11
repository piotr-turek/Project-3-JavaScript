const loginButton = document.getElementById("form__switch__button--login");
const registerButton = document.getElementById(
  "form__switch__button--register"
);

const loginForm = document.getElementById("form__login");
const registerForm = document.getElementById("form__register");

const registerSpan = document.getElementById("register-span");
const loginSpan = document.getElementById("login-span");

const switchToLogin = () => {
  if (!loginButton.classList.contains("form__switch__button--active")) {
    loginButton.classList.add("form__switch__button--active");
  }
  if (registerButton.classList.contains("form__switch__button--active")) {
    registerButton.classList.remove("form__switch__button--active");
  }
  if (loginForm.classList.contains("hidden")) {
    loginForm.classList.remove("hidden");
  }
  if (!registerForm.classList.contains("hidden")) {
    registerForm.classList.add("hidden");
  }
};

const switchToRegister = () => {
  if (!registerButton.classList.contains("form__switch__button--active")) {
    registerButton.classList.add("form__switch__button--active");
  }
  if (loginButton.classList.contains("form__switch__button--active")) {
    loginButton.classList.remove("form__switch__button--active");
  }
  if (registerForm.classList.contains("hidden")) {
    registerForm.classList.remove("hidden");
  }
  if (!loginForm.classList.contains("hidden")) {
    loginForm.classList.add("hidden");
  }
};

loginButton.addEventListener("click", switchToLogin);
loginSpan.addEventListener("click", switchToLogin);
registerButton.addEventListener("click", switchToRegister);
registerSpan.addEventListener("click", switchToRegister);
