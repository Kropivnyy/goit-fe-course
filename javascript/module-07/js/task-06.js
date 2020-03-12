const validationValue = document.querySelector('[id="validation-input"]');
const dataLength = validationValue.getAttribute('data-length');
const validation = () => {
  const inputText = validationValue.value.trim();
  if (inputText.length < dataLength) {
    validationValue.classList.add('invalid');
    validationValue.classList.remove('valid');
    return;
  } else {
    validationValue.classList.add('valid');
    validationValue.classList.remove('invalid');
    return;
  }
};
validationValue.addEventListener('change', validation);
