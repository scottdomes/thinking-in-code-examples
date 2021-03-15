// Run this file by copying 'node module-6/example-5.js' into the Console box in the bottom righthand corner and hitting 'Enter'.

// Try splitting this function into three functions
function calculateSquaredAverage(number1, number2, number3) {
  const square1 = number1 * number1;
  const square2 = number2 * number2;
  const square3 = number3 * number3;
  const sum = square1 + square2 + square3;
  const average = sum / 3;
  return average;
}

const result = calculateSquaredAverage(2, 4, 5);

// Should equal 15
console.log(result);