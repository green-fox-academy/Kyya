
const test = require('tape');
const bankTransfer = require('../bank-transfer.js');

const accounts = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 },
];

test('test getNameAndBalance() with valid parameters', (t) => {
  const expectedClient = ['Igor', 203004099.2];

  t.deepEqual(bankTransfer.getNameAndBalance(accounts, 11234543), expectedClient);
  t.end();
});

test('test transferAmount() with valid parameters', (t) => {
  const expectedAccounts = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 },
  ];

  bankTransfer.transferAmount(accounts, 43546731, 23456311, 500.0);
  t.deepEqual(bankTransfer.accounts, expectedAccounts);
  t.end();
});
