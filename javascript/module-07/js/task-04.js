const value = document.querySelector('span[id="value"]');
const incButton = document.querySelector('button[data-action="increment"]');
const decButton = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};
incButton.addEventListener('click', increment);
decButton.addEventListener('click', decrement);
