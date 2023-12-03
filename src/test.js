function repeater(str, options) {
    let {repeatTimes = 1, separator, addition, additionRepeatTimes, additionSeparator} = options;
    let addingStrArr = [];
    let addingStr = '';
    let partOfString = str;
    let fullArr =[];
    let fullStr = '';
    if (addition) {
      for (let i = 0; i < additionRepeatTimes; i += 1) {
        addingStrArr.push(addition);
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

  console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }))