const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let x = 0; x < matrix[i].length; x += 1) {
      console.log(`falese/true`, matrix[i][x - 1] === 0)
      console.log(`number`, matrix[i][x - 1])
      if (matrix[i - 1]?.[x] === 0) {

      } else {
        sum += matrix[i][x];
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
