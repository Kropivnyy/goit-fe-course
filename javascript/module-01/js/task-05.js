let price;
let country = prompt("Укажите в какую страну необходима доставка");
if (country === null) {
  alert("Отменено пользователем");
} else {
  switch (country.toLowerCase()) {
    case "китай":
      country = "Китай";
      price = 100;
      break;
    case "чили":
      country = "Чили";
      price = 250;
      break;
    case "австралия":
      country = "Австралию";
      price = 170;
      break;
    case "индия":
      country = "Индию";
      price = 80;
      break;
    case "ямайка":
      country = "Ямайку";
      price = 120;
      break;
    default:
      alert("В вашей стране доставка не доступна");
      price = undefined;
  }
  if (price !== undefined) {
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
  }
}
