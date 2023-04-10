
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  var lowdeposits = [];
  for (let index = 0; index < array.length; index++) {

    if (array[index].hasOwnProperty('deposits')) {
      var invest = array[index].deposits;
      var sums  = 0;

      for (let count = 0; count < invest.length; count++) {
        sums = sums + invest[count];
      }

      if (sums < 2000) {
        lowdeposits.push(array[index]);
      }
      
    }

    else{ lowdeposits.push(array[index]);}
   
  }
  return lowdeposits;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
