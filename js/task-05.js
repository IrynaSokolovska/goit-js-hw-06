const formInputEl = document.querySelector("#name-input");

const formOutputEl = document.querySelector("#name-output");

formInputEl.addEventListener("input", (event) => {
  formOutputEl.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
});

