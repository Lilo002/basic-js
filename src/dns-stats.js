const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
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

module.exports = {
  getDNSStats
};
