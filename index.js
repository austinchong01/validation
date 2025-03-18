const dialog = document.querySelector("dialog");
const openDialog = document.querySelector("#openDialog");
const submit = document.querySelector("#submit");

openDialog.addEventListener("click", () => {
  dialog.showModal();
});

document.addEventListener("input", (e) => {
  const field = e.target;
  const fieldName = field.getAttribute("id");
  const errorField = document.querySelector(`#${fieldName} + span.error`);
  if (field.validity.valid) {
    errorField.textContent = "";
    errorField.className = "error";
  } else {
    showError(field, errorField);
  }
});

function showError(field, errorField) {
  if (field.validity.valueMissing) {
    errorField.textContent = "Please provide an input";
  } else if (field.validity.typeMismatch) {
    errorField.textContent = "Invalid email address";
  } else if (field.validity.tooShort) {
    errorField.textContent = "Input too short"
  } else if (field.validity.tooLong){
    errorField.textContent = "Input too long"
  }
  errorField.className = "error active";
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const check = document.querySelectorAll(".active");
  if (check.length == 0) {
    dialog.close();
    console.log("High Five!");
  } else {
    console.log("Check Fields!");
  }
});
