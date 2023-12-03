const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrFirst = s1.split('');
  const arrSecond = s2.split('');
  let counter = 0;

  for (let i = 0; i < arrFirst.length; i += 1) {
    for (let x = 0; x < arrSecond.length; x += 1) {

      if (arrFirst[i] === arrSecond[x]) {
          console.log(arrSecond)
          console.log(arrSecond[x])
        arrSecond.splice(x, 1);
        console.log(arrSecond)
        counter += 1;
        x = 0;
        i += 1;
      }
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
