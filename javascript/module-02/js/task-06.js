let input;
const numbers = [];
let total = 0;
while (input !== null) {
  input = prompt('Введите число', '');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(Number(input));
}
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
