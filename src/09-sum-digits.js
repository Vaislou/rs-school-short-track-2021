/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n;
  number = number.toString().split('');
  let result = 0;
  let resultbig = 0;

  for (let i = 0; i < number.length; i++) {
    number[i] = parseInt(number[i], 10);
  }
  for (let i = 0; i < number.length; i++) {
    result += number[i];
  }
  if (result >= 10) {
    result = result.toString().split('');
    for (let i = 0; i < result.length; i++) {
      result[i] = parseInt(result[i], 10);
    }
    for (let i = 0; i < result.length; i++) {
      resultbig += result[i];
    }
    return resultbig;
  }
  return result;
}

module.exports = getSumOfDigits;
