/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let result = [];
  const arr = email.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '@' && arr[i + 1] !== '.') {
      for (let j = i; j <= arr.length; j++) {
        result.push(arr[j + 1]);
      }
    }
  }
  result = result.join('');
  return result;
}

module.exports = getEmailDomain;
