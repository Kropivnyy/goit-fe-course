const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const user_password = prompt('Введите пароль');
if (user_password === null) {
  message = 'Отменено пользователем!';
} else if (user_password === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
