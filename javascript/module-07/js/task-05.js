const nameInput = document.querySelector('input[id="name-input"]');
const nameOutput = document.querySelector('span[id="name-output"]');
//Нашел решение, оно идеальное, но нет addEventListener
nameInput.oninput = function() {
  nameOutput.innerHTML = nameInput.value;
  if (nameInput.value === '') {
    nameOutput.innerHTML = 'незнакомец';
  }
};
//Это то, что сам изначально наклацал. Тут одна уязвимость -
//если поставить курсор в центр слова и удалять их, то удаляются
//все равно последние буквы
// const fn = event => {
//   if (event.data !== null) {
//     outputMessage.push(event.data);
//   } else {
//     outputMessage.pop();
//   }
//   nameOutput.textContent = outputMessage.join('');
//   if (outputMessage.length === 0) {
//     nameOutput.textContent = 'незнакомец';
//   }
// };
// nameInput.addEventListener('input', fn);
