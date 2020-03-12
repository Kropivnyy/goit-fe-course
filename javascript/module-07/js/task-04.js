// const value = document.querySelector('span[id="value"]');
// const incButton = document.querySelector('button[data-action="increment"]');
// const decButton = document.querySelector('button[data-action="decrement"]');
// let counterValue = 0;
// const increment = () => {
//   counterValue += 1;
//   value.textContent = counterValue;
// };
// const decrement = () => {
//   counterValue -= 1;
//   value.textContent = counterValue;
// };
// incButton.addEventListener('click', increment);
// decButton.addEventListener('click', decrement);

const counter = {
  value: document.querySelector('[id="value"]'),
  incButton: document.querySelector('button[data-action="increment"]'),
  decButton: document.querySelector('button[data-action="decrement"]'),
  counterValue: 0,
  increment: function() {
    this.counterValue += 1;
    value.textContent = this.counterValue;
  },
  decrement: function() {
    this.counterValue -= 1;
    value.textContent = this.counterValue;
  },
};
counter.incButton.addEventListener('click', counter.increment.bind(counter));
counter.decButton.addEventListener('click', counter.decrement.bind(counter));
