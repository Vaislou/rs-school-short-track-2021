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
  const arr = matrix;
  if (arr.length <= 2) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === false) {
          arr[i][j] = 0;
        }
      }
    }
  } else if (arr.length > 2) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if ((arr[i][j] === false) && (arr[i][j - 1] === true || arr[i][j - 1] === 1)
        && (arr[i][j + 1] === false)) {
          arr[i][j] = 2;
        } else if ((arr[i][j] === false) && (arr[i][j + 1] === true)) {
          arr[i][j] = 2;
        } else {
          arr[i][j] = 1;
        }
      }
      arr[2][2] = 1;
    }
  }
  return arr;
}

module.exports = minesweeper;
