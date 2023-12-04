function isMAC48Address(n) {
  let arr = n.split('-');
  console.log(arr);
  return !arr.some((item, index) => isNaN(parseInt(item, 16)));
}

  console.log(isMAC48Address('not a MAC-48 address'))

  console.log(parseInt('Z1', 16))