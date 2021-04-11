/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const emp = 'a';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push(arr[i]);
      arr.splice(i, 1);
      i--;
    } else {
      result.push(emp);
    }
  }
  arr.sort((a, b) => (a - b));
  for (let i = 0; i < result.length; i++) {
    if (result[i] === emp) {
      result.splice(i, 1, arr[0]);
      arr.splice(0, 1);
    }
  }
  return result;
}

module.exports = sortByHeight;
