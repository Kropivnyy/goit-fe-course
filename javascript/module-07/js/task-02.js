const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const unorderedList = document.querySelector('#ingredients');
const arrayOfItems = [];
const getList = array =>
  array.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    arrayOfItems.push(listItem);
  });
getList(ingredients);
unorderedList.append(...arrayOfItems);
