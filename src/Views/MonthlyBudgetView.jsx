import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import CategoryGroup from '../Components/MonthlyBudgetComps/CategoryGroup.jsx';

const MonthlyBudgetView = ({ monthData, categories }) => {
    const { monthName, income, budgeted, funded, spent } = monthData;
    const incomeNeeded = budgeted - income;
    const availableForFunding = income - funded;

    return (
        <>
            <ListGroup horizontal>
                <ListGroup.Item>Income for {monthName}</ListGroup.Item>
                <ListGroup.Item>${income}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item>Income needed to fund budget</ListGroup.Item>
                <ListGroup.Item>${incomeNeeded > 0 ? incomeNeeded : 0}</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item>Income available for Funding</ListGroup.Item>
                <ListGroup.Item>${availableForFunding}</ListGroup.Item>
            </ListGroup>
            <CategoryGroup type='variable' categories={categories.variable} />
            <CategoryGroup type='monthly' categories={categories.monthly} />
        </>
    );
};

export default MonthlyBudgetView;