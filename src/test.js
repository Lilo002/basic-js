function deleteDigit(n) {
  let maxNum = 0;
  let arrFromNumber = n.toString().split('');

  arrFromNumber.forEach((item, index) => {
    let arr = [];
    for (let i = 0; i < arrFromNumber.length; i += 1) {
        if (index !== i) {
            arr.push(arrFromNumber[i]);
        }
        
    }
    let newNumber = parseInt(arr.join(''));
    console.log(newNumber);
    if (newNumber > maxNum) {
        maxNum = newNumber;
    }
  })

  return maxNum;
}
  console.log(deleteDigit(324464526))