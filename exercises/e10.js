// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  var accountName = [];

  for (let index = 0; index < array.length; index++) {
    var temp = array[index].name.toLowerCase();
    if (temp.includes(letter) ) {
      accountName.push(array[index].name);
    }
    
    
    
  }
  return accountName;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
