const findLongestWord = function(string) {
  const longestWord = [];
  let longestWordLength = 0;
  string = string.split(' ');
  for (let i = 0; i < string.length; i += 1) {
    if (string[i].length > longestWordLength) {
      longestWordLength = string[i].length;
    }
  }
  // Цикл для того, чтобы вывести слова одинаковой максимальной длины
  for (let i = 0; i < string.length; i += 1) {
    if (string[i].length === longestWordLength) {
      longestWord.push(string[i]);
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
