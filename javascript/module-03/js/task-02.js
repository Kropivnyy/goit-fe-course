// const countProps = function(obj) {
//   let totalProps = 0;
//   for (const key in obj) {
//     totalProps += 1;
//   }
//   return totalProps;
// };
const countProps = function(obj) {
  return Object.keys(obj).length;
};
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
