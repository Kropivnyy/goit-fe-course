const items = document.querySelectorAll('.item');
const categories = document.querySelector('#categories');
const heading = document.querySelectorAll('.item h2');
const listInList = document.querySelectorAll('.item ul');
const getCountItems = array => array.length;
const getHeading = head => head.textContent;
const getCategoriesInfo = array =>
  array.forEach((element, index) => {
    console.log(`Категория: ${getHeading(heading[index])}`);
    console.log(
      `Количество элементов: ${getCountItems(listInList[index].children)}`,
    );
  });
console.log(`В списке ${getCountItems(categories.children)} категории`);
getCategoriesInfo(items);
