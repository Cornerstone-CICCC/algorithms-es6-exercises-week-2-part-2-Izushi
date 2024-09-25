// Some Exercise
// Instructions: Create an array of at least five numbers. Write code to check if some of the numbers are even.

const numbers = [1, 2, 6, 23, 45, 22, 11, 9];

const isThereAnEvenNumber = (numbers) => {
  return numbers.some(number => number % 2 === 0);
}

console.log(isThereAnEvenNumber(numbers));