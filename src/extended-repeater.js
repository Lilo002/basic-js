const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes = 1, separator, addition, additionRepeatTimes = 1, additionSeparator} = options;
  let addingStrArr = [];
  let addingStr = '';
  let partOfString = str;
  let fullArr =[];
  let fullStr = '';
  if (addition === false || addition || addition === null) {
    for (let i = 0; i < additionRepeatTimes; i += 1) {
      addingStrArr.push(`${addition}`);
    }
    addingStr = addingStrArr.join(`${additionSeparator ? additionSeparator : '|'}`);
    partOfString += addingStr;
  }

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i += 1) {
      fullArr.push(partOfString);
    }
    fullStr = fullArr.join(separator ? separator : '+');
  }
  return fullStr;
}

module.exports = {
  repeater
};
