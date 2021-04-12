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
  let result = [];
  let sum = 1;
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      sum++;
      arr.splice(i, 1);
      i--;
    } else if (arr[i] !== arr[i + 1]) {
      result.push(sum, arr[i]);
      sum = 1;
      arr.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] === 1) {
      result.splice(i, 1);
      i--;
    }
  }
  result = result.join('');
  return result;
}

module.exports = encodeLine;
