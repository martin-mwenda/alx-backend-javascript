#!/usr/bin/node

const calculateNumbers = (type, a, b) => {
  a = Math.round(a);
  b = Math.round(b);
  let result = 0;

  if (type === 'SUM') result = a + b;
  if (type === 'SUBTRACT') result = a - b;
  if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error';
    }
    result = a / b;
  }
  return result;
};

module.exports = calculateNumbers;
