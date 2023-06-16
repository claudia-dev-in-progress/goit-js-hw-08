import throttle from "lodash.throttle";

const email = document.querySelector("input");
const message = document.querySelector("textarea");
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const storedItem = localStorage.getItem("feedback-form-state");
  if (storedItem !== undefined && storedItem !== null) {
    console.log(storedItem);
  }

  email.value = null;
  message.value = null;

  localStorage.removeItem("feedback-form-state");
});

const throttleFunction = throttle(updateLocalStorage, 500);

form.addEventListener("input", throttleFunction);
const storageObject = localStorage.getItem("feedback-form-state");

if (storageObject !== undefined && storageObject !== null) {
  const { email: emailValue, message: messageValue } =
    JSON.parse(storageObject);
  if (emailValue !== undefined && emailValue !== "") {
    email.value = emailValue;
  }

  if (messageValue !== undefined && messageValue !== "") {
    message.value = messageValue;
  }
}

function updateLocalStorage() {
  const storedObject = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem("feedback-form-state", JSON.stringify(storedObject));
}
