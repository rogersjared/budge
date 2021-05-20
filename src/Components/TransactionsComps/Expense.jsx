import React from 'react';
import { GetLocalStorage } from '../../localStorage.js';

const Expense = ({ expense, index }) => {
  const { expenseId, timestamp, payee, category, account, amount} = expense;
  const { setTransactions, transactions, accounts } = GetLocalStorage();
  
  const updateExpense = (event) => {
    const update = transactions.expenses.slice();
    update[index][event.target.name] = event.target.value;
    setTransactions({
      expenses: update
     });
  }

  return (
    <tr>
      <td><input name='timestamp' type='date' value={timestamp} onChange={updateExpense} /></td>
      <td><input name='payee' type='text' value={payee} onChange={updateExpense} /></td>
      <td><input name='account' type='text' value={account} onChange={updateExpense} /></td>
      <td><input name='category' type='text' value={category} onChange={updateExpense} /></td>
      <td><input name='amount' type='number' value={amount} onChange={updateExpense} /></td>
    </tr>
  );
};

export default Expense;