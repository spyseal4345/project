let formOpenBtn = document.querySelector("#form-open");
let loginContainer = document.querySelector(".login-container");
let formContainer = document.querySelector(".form-container");
let formCloseBtn = document.querySelector(".form-close");
let signupBtn = document.querySelector("#signup");
let loginBtn = document.querySelector("#login");
let pwShowHide = document.querySelector(".hide");
// show-up
formOpenBtn.addEventListener("click",() => loginContainer.classList.add("show"))
formOpenBtn.addEventListener("click",() => loginContainer.classList.remove("show"))
// changing-form
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
