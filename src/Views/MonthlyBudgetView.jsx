import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import CategoryGroup from '../Components/MonthlyBudgetComps/CategoryGroup.jsx';

const MonthlyBudgetView = ({ monthData, categories }) => {
    const { monthName, income, spent } = monthData;

    return (
        <>
            <ListGroup horizontal>
                <ListGroup.Item>Income for {monthName}</ListGroup.Item>
                <ListGroup.Item>$xxx</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item>Income needed to fund budget</ListGroup.Item>
                <ListGroup.Item>$xxx</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item>Income available for Funding</ListGroup.Item>
                <ListGroup.Item>${income - spent}</ListGroup.Item>
            </ListGroup>
            <CategoryGroup type='variable' categories={categories.variable} />
            <CategoryGroup type='monthly' categories={categories.monthly} />
        </>
    );
};

export default MonthlyBudgetView;