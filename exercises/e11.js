// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...
  var withdrawalSums = [];
  for (let index = 0; index < array.length; index++) {

    if (array[index].hasOwnProperty('withdrawals')) {
      var taken = array[index].withdrawals;
      var sums  = 0;

      for (let count = 0; count < taken.length; count++) {
        sums = sums + taken[count];
      }

      withdrawalSums.push(sums);
    }

    else{ withdrawalSums.push(0);}
   
  }
  return withdrawalSums;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
