import React from 'react';
import { GetLocalStorage } from '../../localStorage.js';

const IncomeTransfer = ({ incomeTransfer, index }) => {
  const { incomeTransferId, timestamp, toAccount, fromAccount, amount} = incomeTransfer;
  const { accounts, setTransactions, transactions } = GetLocalStorage();
  
  const updateIncomeTransfer = (event) => {
    const update = transactions.incomeTransfers.slice();
    update[index][event.target.name] = event.target.value;
    setTransactions({
      incomeTransfers: update
     });
  }

  return (
    <tr>
      <td><input name='timestamp' type='date' value={timestamp} onChange={updateIncomeTransfer} /></td>
      <td><input name='toAccount' type='text' value={toAccount} onChange={updateIncomeTransfer} /></td>
      <td><input name='fromAccount' type='text' value={fromAccount} onChange={updateIncomeTransfer} /></td>
      <td><input name='amount' type='number' value={amount} onChange={updateIncomeTransfer} /></td>
    </tr>
  );
};

export default IncomeTransfer;