// Run this file by copying 'node module-8/example-6.js' into the Console box in the bottom righthand corner and hitting 'Enter'.

function square(number) {
  return number * number;
}

function squaredAverage(number1, number2) {
  const sum = square(number1) + square(number2);
  return sum / 2;
}

function compareSquaredAverages(number1, number2, number3, number4) {
  const squaredAverage1 = squaredAverage(number1, number2);
  const squaredAverage2 = squaredAverage(number3, number4);

  if (squaredAverage1 > squaredAverage2) {
    return 'Squared average 1 is bigger';
  } else if (squaredAverage1 === squaredAverage2) {
    return 'Squared averages are equal';
  } else {
    return 'Squared average 2 is bigger';
  }
}

const result1 = compareSquaredAverages(1, 2, 3, 4);
const result2 = compareSquaredAverages(4, 3, 3, 4);
const result3 = compareSquaredAverages(3, 4, 1, 2);

console.log(result1);
console.log(result2);
console.log(result3);