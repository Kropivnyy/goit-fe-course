const controls = document.querySelector('[id="controls"]');
const input = controls.querySelector('input');
const renderButton = controls.querySelector('button[data-action="render"]');
const destroyButton = controls.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('[id="boxes"]');
const createBoxes = amount => {
  const arrayOfDiv = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = randomColor();
    arrayOfDiv.push(div);
  }
  boxes.append(...arrayOfDiv);
};
const callback = () => {
  createBoxes(Math.round(input.value));
};
const destroyBoxes = () => {
  boxes.innerHTML = '';
};
const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};
renderButton.addEventListener('click', callback);
destroyButton.addEventListener('click', destroyBoxes);
