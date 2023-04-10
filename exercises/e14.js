
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  var incorrectbalance = [];

  for (let index = 0; index < array.length; index++) {
    var totalDeposits = 0;
    var totalWithdrals = 0;
    var totalBalance = 0;

    if (array[index].hasOwnProperty('withdrawals') && array[index].hasOwnProperty('deposits') ) {
      var taken = array[index].withdrawals;
      var invest  = array[index].deposits;

      for (let count = 0; count < invest.length; count++) {
        totalDeposits = totalDeposits + invest[count];
      }
      for (let count = 0; count < taken.length; count++) {
        totalWithdrals = totalWithdrals + taken[count];
      } 

      totalBalance = totalDeposits - totalWithdrals;

      if (array[index].balance != totalBalance) {
        incorrectbalance.push(array[index]);
      }
    }

    
  }
  return incorrectbalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
