const { NotImplementedError } = require('../extensions/index.js');

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
  let arr = [];

  for (let i = 0; i < names.length; i += 1) {
    console.log(parseInt(names[i][names[i].length - 2]))
    if (!arr.includes(names[i])) {
      arr.push(names[i]);
    } else if (parseInt(names[i][names[i].length - 2])){
      arr.push(`${names[i]}(1)`);
    } else {
      let counter = 0;
      for (let x = 0; x < i; x += 1) {
        if(x !== i && names[i] === names[x]){
          counter += 1;
        }
      }
      arr.push(`${names[i]}(${counter})`);
    }
  }
  return arr;
}
module.exports = {
  renameFiles
};
