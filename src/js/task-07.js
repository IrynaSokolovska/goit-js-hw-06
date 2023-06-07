const formInputEl = document.querySelector("#font-size-control");
const formOutputEl = document.querySelector("#text");

formOutputEl.style.fontSize = "26px";

formInputEl.addEventListener("input", (event) => {
  formOutputEl.style.fontSize = `${event.currentTarget.value}px`;
});