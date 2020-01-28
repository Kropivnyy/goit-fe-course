const findBestEmployee = function(employees) {
  const entries = Object.entries(employees);
  let maxValue = 0;
  let bestEmployee = '';
  for (const entry of entries) {
    if (entry[1] > maxValue) {
      maxValue = entry[1];
      bestEmployee = entry[0];
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
