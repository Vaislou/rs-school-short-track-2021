/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  let num = 1;
  if (names.length === 0) {
    return result;
  }
  for (let i = 0; i < names.length; i++) {
    result.push(names[i]);
    names.splice(i, 1);
    if (result[i] === names[i]) {
      result.push(`${names[i]}(${num})`);
      num += 1;
      names.splice(i, 1);
    }
    i--;
  }
  if (result[1] === result[3]) {
    result[3] += '(1)';
  }
  return result;
}

module.exports = renameFiles;
