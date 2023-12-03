function getCommonCharacterCount(s1, s2) {
    const arrFirst = s1.split('');
    const arrSecond = s2.split('');
    let counter = 0;

    for (let i = 0; i < arrFirst.length; i += 1) {
      for (let x = 0; x < arrSecond.length; x += 1) {

        if (arrFirst[i] === arrSecond[x]) {
            console.log(arrSecond)
            console.log(arrSecond[x])
          arrSecond.splice(x, 1);
          console.log(arrSecond)
          counter += 1;
          x = 0;
          i += 1;
        }
      }
    }
    return counter;
  }
  console.log(getCommonCharacterCount('aabcc', 'adcaa'))