// Includes Exercise
// Instructions: Create an array of at least five different fruits as strings. Write code to check if the array includes the fruit "apple".

const fruits = ['banana', 'apple', 'orange', 'kiwi', 'mango'];

const isAppleIncluded = (fruits) => {
  if (fruits.includes('apple')) {
    return "Apple is included.";
  } else {
    return "Apple isn't included.";
  }
}

console.log(isAppleIncluded(fruits));