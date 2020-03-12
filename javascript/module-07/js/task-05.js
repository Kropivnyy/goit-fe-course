const nameInput = document.querySelector('[id="name-input"]');
const nameOutput = document.querySelector('[id="name-output"]');
const greeting = () => {
  nameOutput.innerHTML = nameInput.value;
  if (nameInput.value === '') {
    nameOutput.innerHTML = 'незнакомец';
  }
};
nameInput.addEventListener('input', greeting);
