
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r', 'a'], ['f', 'y']]) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  // Your code goes here...
var subArray = [];
var flattened = [];
for (let index = array.length; index > 0; index--) {
  if (Array.isArray(array[index]) && index == array.length) {
    subArray.push(array[index]);
    array.pop();
  }
}
for (let index = 0; index < array.length; index++) {
  flattened.push(array[index]);
}

for (let index = 0; index < subArray.length; index++) {
  flattened.push(subArray[index]);
}
return flattened;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
