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
      categories: {
        variable: [{
          categoryId: 0,
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }, {
          categoryId: 0,
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }],
        monthly: [{
          categoryId: 0,
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }]
      },
      transactions: {
        expenses: [{
          expenseId: 2,
          month: '4-2021',
          timestamp: '',
          payee: 'test',
          category: '',
          amount: 500,
          accountId: '',
        }, {
          expenseId: 3,
          timestamp: '',
          payee: 'test 2',
          category: '',
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
      data: {
        monthName: 'April',
        monthYear: 2021,
        income: 0,
        spent: 0,
      },
      categories: {
        variable: [{
          categoryId: 0,
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }, {
          categoryId: 0,
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }],
        monthly: [{
          categoryId: 0,
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }]
      },
      transactions: {
        expenses: [{
          expenseId: 1,
          month: '4-2021',
          timestamp: '',
          payee: '',
          category: '',
          amount: 0,
          accountId: '',
        }],
        incomeTransfers: [{
          incomeTransferId: 2,
          month: '4-2021',
          timestamp: '',
          toAccount: '',
          fromAccount: '',
          amount: 0,
        }]
      }
    }
  }
}

export { localStorage, GetLocalStorage, localStorageData };
export default localStorageData;