import { createContext, useContext } from 'react';

const localStorage = createContext();

const GetLocalStorage = () => {
  const data = useContext(localStorage);
  return data;
};

const localStorageData = {
  accounts: {
    nextId: 3,
    checking: [{
      accountId: 1, 
      accountName: '', 
      balance: 0,
      buffer: 0
    }],
    savings: [{
      accountId: 2, 
      accountName: '', 
      balance: 0
    }],
    creditcards: [],
    loans: []
  },
  months: {
    '5-2021': {
      data: {
        monthName: 'May',
        monthYear: 2021,
        income: 2000,
        budgeted: 0,
        funded: 0,
        spent: 0,
      },
      categoryData: {
        categoryGroups: {
          variable: [1, 2],
          monthly: [3],
        },
        categories: {
          1: {
          categoryId: 1,
          name: 'test',
          budgeted: 0,
          funded: 0, 
          spent: 0,
          }, 
          2:{
          categoryId: 2,
          name: 'test2',
          budgeted: 0,
          funded: 0, 
          spent: 0,
          }, 
          3:{
          categoryId: 3,
          name: 'test3',
          budgeted: 0,
          funded: 100, 
          spent: 0,
          }
        }
      },
      transactions: {
        expenses: [{
          expenseId: 2,
          timestamp: '',
          payee: 'test',
          categoryId: 1,
          amount: 500,
          accountId: '',
        }, {
          expenseId: 3,
          timestamp: '',
          payee: 'test 2',
          categoryId: 2,
          amount: 200,
          accountId: '',
        }],
        incomeTransfers: [{
          incomeTransferId: 3,
          timestamp: '',
          toAccount: '',
          fromAccount: '',
          amount: 0,
        }]
      }
    },
    '4-2021': {
    }
  }
}

export { localStorage, GetLocalStorage, localStorageData };
export default localStorageData;