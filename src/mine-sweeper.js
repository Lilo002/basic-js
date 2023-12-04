const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let newArr = [];

  for (let y = 0; y < matrix.length; y += 1) {
    newArr.push([]);
    for (let x = 0; x < matrix[i].length; x += 1) {
      let counter = 0;
      const neighbor_1 = matrix[y - 1]?.[x - 1],
            neighbor_2 = matrix[y - 1]?.[x],
            neighbor_3 = matrix[y - 1]?.[x + 1],
            neighbor_4 = matrix[y]?.[x - 1],
            neighbor_5 = matrix[y]?.[x + 1],
            neighbor_6 = matrix[y + 1]?.[x - 1],
            neighbor_7 = matrix[y + 1]?.[x],
            neighbor_8 = matrix[y + 1]?.[x + 1];
  
      const neighborArr = [
        neighbor_1,
        neighbor_2,
        neighbor_3,
        neighbor_4,
        neighbor_5,
        neighbor_6,
        neighbor_7,
        neighbor_8,
      ];

      let neighbors = neighborArr.filter((item) => typeof item !== 'undefined');

      neighbors.forEach((item) => {
        if (item === true) {
          counter++;
        }
      })

      newArr[y].push(counter);
    }
  }
  return newArr;
}

module.exports = {
  minesweeper
};
