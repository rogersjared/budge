import React from 'react';
import Table from 'react-bootstrap/Table';
import Expense from '../Components/TransactionsComps/Expense.jsx';
import IncomeTransfer from '../Components/TransactionsComps/IncomeTransfer.jsx';
import Container from 'react-bootstrap/Container'

// import IncomeTransfer from '../TransactionsComps/IncomeTransfer.jsx';

const TransactionsView = ({ transactions }) => {
  const { expenses, incomeTransfers } = transactions;

  return (
    <Container className="justify-content-md-left">
    <>
    <br />
    <br />
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
      <br />
      <br />
      <br />
      <h1>Income &#38; Transfers</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>To Account:</th>
            <th>From Account:</th>
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
  </Container>
  );
};

export default TransactionsView;