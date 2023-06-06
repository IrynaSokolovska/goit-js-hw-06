let counterValue = 0;

const counterEl = document.querySelector("#value");

const onDecremBtnClick = document.querySelector('button[data-action="decrement"]');

const onIncremBtnClick = document.querySelector('button[data-action="increment"]');

onDecremBtnClick.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});

onIncremBtnClick.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});