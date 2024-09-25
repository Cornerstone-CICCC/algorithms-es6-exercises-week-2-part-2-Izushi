// Every Exercise
// Instructions: Create an array of at least five numbers. Write code to check if every number in the array is positive.

const numbers = [1, 2, -6, 23, 45, 22, 11, 9];

const isEveryNumbersPositive = (numbers) => {
  return numbers.every(number => number > 0);
}

console.log(isEveryNumbersPositive(numbers));