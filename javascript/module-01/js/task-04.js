let credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let numberOfDroidsPurchased;
while (numberOfDroidsPurchased !== null) {
  numberOfDroidsPurchased = prompt('Сколько дроидов желаете приобрести?');
  if (numberOfDroidsPurchased === null) {
    console.log('Отменено пользователем!');
    break;
  }
  if (isNaN(numberOfDroidsPurchased) || numberOfDroidsPurchased === '') {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else {
    totalPrice = pricePerDroid * numberOfDroidsPurchased;
    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
      break;
    } else {
      credits -= totalPrice;
      console.log(
        `Вы купили ${numberOfDroidsPurchased} дроидов, на счету осталось ${credits} кредитов.`,
      );
      break;
    }
  }
}
