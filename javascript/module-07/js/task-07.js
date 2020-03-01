const inputRange = document.querySelector('input[id="font-size-control"]');
const text = document.querySelector('span[id="text"]');
const fontSizeControl = () => {
  text.style.fontSize = `${inputRange.value}px`;
};
inputRange.addEventListener('input', fontSizeControl);
