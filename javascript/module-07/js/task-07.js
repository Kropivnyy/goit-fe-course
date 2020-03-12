const inputRange = document.querySelector('[id="font-size-control"]');
const text = document.querySelector('[id="text"]');
const fontSizeControl = () => {
  text.style.fontSize = `${inputRange.value}px`;
  text.style.lineHeight = `${Number(inputRange.value) + 10}px`;
};
inputRange.addEventListener('input', fontSizeControl);
