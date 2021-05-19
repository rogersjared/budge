import { createContext, useContext } from 'react';

const appContext = createContext();

const retrieveLocalStorage = () => {
  const data = useContext(appContext);
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
    jan_2021: {
      income: 0,
      spent: 0,
      categories: [{
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
      transactions: [{
        month: 'jan_2021',
        category: '',
        amount: '',
        accountId: '',
        type: 'income'
      }]
    },
    feb_2021: {
      income: 0,
      spent: 0,
      categories: [{
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
      transactions: [{
        month: 'feb_2021',
        timestamp: '',
        category: '',
        amount: '',
        accountId: '',
        type: 'income'
      }]
    }
  }
}

export { localStorage, retrieveLocalStorage, localStorageData };
export default retrieveLocalStorage;