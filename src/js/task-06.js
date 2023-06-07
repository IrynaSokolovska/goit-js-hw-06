const formInputEl = document.querySelector("#validation-input");

formInputEl.addEventListener("blur", (event) => {
    event.currentTarget.value.length === Number(formInputEl.getAttribute("data-length")) ?
    (formInputEl.classList.add("valid"), formInputEl.classList.remove("invalid")) :
    (formInputEl.classList.add("invalid"), formInputEl.classList.remove("valid"));
});