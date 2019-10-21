const accounts = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 },
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
function getNameAndBalance(accountNumber) {
  for (const account of accounts) {
    if (account.accountNumber === accountNumber) {
      return [account.clientName, account.balance];
    }
  }
  return [];
}
console.log(getNameAndBalance(11234543));
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
// After printing the "accounts" it should look like:
// const accounts = [
//  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//  { clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
// ]
function transferAmount(target, from, to, amount) {
  for (const i of target) {
    if (i.accountNumber === from) {
      i.balance -= amount;
    } else if (i.accountNumber === to) {
      i.balance += amount;
    }
  }
  return target;
}

console.log(transferAmount(accounts, 43546731, 23456311, 500.0));

module.exports = {
  getNameAndBalance,
  transferAmount,
  accounts,
};
