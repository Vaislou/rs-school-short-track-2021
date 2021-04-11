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
function getMatrixElementsSum(arr) {
  const sum = [];
  let result = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[j].length; i++) {
      if ((j > 0 && arr[j - 1][i] !== 0) || j === 0) {
        sum.push(arr[j][i]);
      }
    }
  }
  for (let i = 0; i < sum.length; i++) {
    result += sum[i];
  }
  return result;
}

module.exports = getMatrixElementsSum;
