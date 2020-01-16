let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt("Введите число");
  if (isNaN(input) || input === "") {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  input = Number(input);
  numbers.push(input);
}
