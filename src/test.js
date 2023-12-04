function getSumOfDigits(n) {
  while (n > 9) {
    let arr = n.toString().split('');
    n = arr.reduce((acc, cur) => +acc + +cur);  
  }
  return n;
}

  console.log(getSumOfDigits(99))