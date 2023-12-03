const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let newStr = '';
  while (arr.length) {
    for (let x = 0; x < arr.length; x += 1) {
      let counter = 1;
      for (let i = 0; i < arr.length; i += 1) {
        if (x !== i) {
          if (arr[x] !== arr[i]) {
            break;
          }
          counter += 1;
        }
      }
      newStr += `${counter > 1 ? counter : ''}${arr[0]}`;
      arr.splice(0, counter);
        if (arr.length) {
          x = 0;
          i = 0;
      }
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
