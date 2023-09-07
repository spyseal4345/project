let formOpenBtn = document.querySelector("#form-open");
let loginContainer = document.querySelector(".login-container");
let formContainer = document.querySelector(".form-container");
let formCloseBtn = document.querySelector(".form-close");
let signupBtn = document.querySelector("#signup");
let loginBtn = document.querySelector("#login");
let pwShowHide = document.querySelector(".hide");
// show-password
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    console.log(getPwInput);
  });
// changing-form
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
