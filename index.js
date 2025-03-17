const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("#openDialog");
const submit = document.querySelector("#submit");

const email = document.querySelector("#mail");
const country = document.querySelector("#country");
const postal = document.querySelector("#postal");
const password = document.querySelector("#password");

openDialog.addEventListener("click", () => {
  dialog.showModal();
});

email.addEventListener("input", (e) => {
  if (!email.validity.valid) {
    email.setCustomValidity("Please input a valid email address!");
    console.log("reached")
  } else {
    email.setCustomValidity("");
  }
});

country.addEventListener("input", (e) => {
  if (country.validity.tooShort || country.validity.valueMissing) {
    country.setCustomValidity("Please input a valid Country!");
  } else {
    country.setCustomValidity("");
  }
});


