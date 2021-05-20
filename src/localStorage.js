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
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }, {
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }],
        monthly: [{
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }]
      },
      transactions: [{
        month: 'jan_2021',
        category: '',
        amount: '',
        accountId: '',
        type: 'income'
      }]
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
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }, {
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }],
        monthly: [{
          name: '',
          budgeted: 0,
          funded: 0, 
          spent: 0,
        }]
      },
      transactions: [{
        month: 'feb_2021',
        timestamp: '',
        category: '',
        amount: 0,
        accountId: '',
        type: 'income'
      }]
    }
  }
}

export { localStorage, GetLocalStorage, localStorageData };
export default localStorageData;