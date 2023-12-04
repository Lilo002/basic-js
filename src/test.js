function getDNSStats(domains) {
  let DNSObj = {};

  for( let i = 0; i < domains.length; i += 1) {
    let arr = domains[i].split('.');
    for (let x = arr.length; x >= 0; x -= 1) {
      let DNSArr = [];
      let counter = x;

      while(counter < arr.length) {
        DNSArr.push(`.${arr[counter]}`);
        counter ++;
      }

      let DNSStr = DNSArr.reverse().join('');

      if (DNSObj.hasOwnProperty(DNSStr) && DNSStr) {
        DNSObj[DNSStr] += 1;
      } else if (DNSStr) {
        DNSObj[DNSStr] = 1;
      }
    }
  }
  return DNSObj
}

  console.log(getDNSStats(['epam.com', 'info.epam.com']))
