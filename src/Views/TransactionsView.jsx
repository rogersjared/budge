import React from 'react';
import Table from 'react-bootstrap/Table';
import Expense from '../Components/TransactionsComps/Expense.jsx';
import IncomeTransfer from '../Components/TransactionsComps/IncomeTransfer.jsx';

// import IncomeTransfer from '../TransactionsComps/IncomeTransfer.jsx';

const TransactionsView = ({ expenses, incomeTransfers }) => {
  return (
    <>
      <h1>Expenses</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timestamp</th>
            <th>Payee</th>
            <th>Account</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((transaction, index) => (
            <Expense expense={transaction} index={index} key={'expense'+index} />
          ))}
        </tbody>
      </Table>
      
      <h1>Income &#38; Transfers</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>From Account:</th>
            <th>To Account:</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {incomeTransfers.map((transaction, index) => (
            <IncomeTransfer incomeTransfer={transaction} index={index} key={'incomeTransfer'+index} />
          ))}
        </tbody>
      </Table> 
  </>
  );
};

export default TransactionsView;