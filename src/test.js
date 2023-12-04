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

console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));


