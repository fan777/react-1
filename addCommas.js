function addCommas(number) {
  let retVal = '';
  let isNegative = number < 0;
  let integer = Math.abs(Math.floor(number));

  while (integer > 0) {
    if ((integer / 1000) > 1) {
      let remainder = integer % 1000
      retVal = ',' + remainder + retVal;
    } else {
      retVal = integer + retVal;
    }
    integer = Math.floor(integer / 1000);
  }

  if (isNegative)
    retVal = '-' + retVal;

  // console.log(retVal);
  return retVal;
}

module.exports = addCommas;