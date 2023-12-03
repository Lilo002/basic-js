function encodeLine(str) {
  let arr = str.split('');
  let newStr = '';
while(arr.length) {
  for (let x = 0; x < arr.length; x += 1) {
    let counter = 1;
    console.log(arr);
    for (let i = 0; i < arr.length; i += 1) {
      console.log(arr[i])
      if (x !== i) {
        if (arr[x] !== arr[i]) {
          break;
        }
        counter += 1;
      }
    }
    newStr += `${counter > 1 ? counter : ''}${arr[0]}`;
    arr.splice(0, counter);
      if (arr.length) {
        x = 0;
        i = 0;
    }
  }
}
  
  return newStr;
}

  console.log(encodeLine('xyz'))