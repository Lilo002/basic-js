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

  console.log(getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ]))