const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNum = 0;
  let arrFromNumber = n.toString().split('');

  arrFromNumber.forEach((item, index) => {
    let arr = [];
    for (let i = 0; i < arrFromNumber.length; i += 1) {
        if (index !== i) {
            arr.push(arrFromNumber[i]);
        }
    }
    let newNumber = parseInt(arr.join(''));
    console.log(newNumber);
    if (newNumber > maxNum) {
        maxNum = newNumber;
    }
  })
  return maxNum;
}

module.exports = {
  deleteDigit
};
