// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastBalance(array) {
  // Your code goes here...
  var closetoBroke = [];
  var lowestValue = array[0].balance;
  for (let index = 0; index < array.length; index++) {
    if (array[index].balance < lowestValue && array[index].balance > 0) {
      closetoBroke.push(array[index]);
    }
  }
  return closetoBroke;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
