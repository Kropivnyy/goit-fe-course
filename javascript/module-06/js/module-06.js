import users from './users.js';
console.log(`Task 01`);
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.log(`Task 02`);
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log(`Task 03`);
const getUsersWithGender = (users, gender) => {
  const filterArray = () => users.filter(user => user.gender === gender);
  return filterArray().map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

console.log(`Task 04`);
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log(`Task 05`);
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

console.log(`Task 06`);
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log(`Task 07`);
console.log(`Task 08`);
console.log(`Task 09`);
console.log(`Task 10`);
