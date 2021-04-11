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
  let arr = n.toString().split('');
  let min = Math.min(...arr);
  min = min.toString();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      arr[i] = '';
      break;
    }
  }
  arr = arr.join('');
  const result = parseInt(arr, 10);
  return result;
}

module.exports = deleteDigit;
