// Find Exercise
// Instructions: Create an array of at least five numbers. Write code to find the first element that is greater than 10.

let numbers = [1, 2, 6, 23, 45, 22, 11, 9];

const findOver10Num = numbers.find(number => number > 10)

console.log(findOver10Num);