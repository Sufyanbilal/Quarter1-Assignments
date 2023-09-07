// Question22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, 
// try to make one happen. Change an index in one of your programs to produce an index error. 
// Make sure you correct the error before closing the program.

const numbers: number[] = [1, 2, 3, 4, 5];
const outOfBoundsValue = numbers[10];

console.log("This line will not be printed due to the error.");

const validValue = numbers[3];

console.log("Valid value at index 2:", validValue);