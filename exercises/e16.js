
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r', 'a'], ['f', 'y']]) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function flatArrays(array) {
  // Your code goes here...
  const flatArray = [];

  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
    
      for (let index = 0; index < array[i].length; index++) {
        if (Array.isArray(array[i][index])) {
          return undefined;
        } else {
          flatArray.push(array[i][index])
        }
        
        
      }
    } else {
      flatArray.push(array[i]);
    } 
  }

  return flatArray;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
