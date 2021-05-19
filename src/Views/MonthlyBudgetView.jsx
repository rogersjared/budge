import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import CategoryGroup from '../Components/MonthlyBudgetComps/CategoryGroup.jsx';

const MonthlyBudgetView = ({ month }) => {
    const { income, spent, categories } = month;

    return (
        <>
            <ListGroup horizontal>
                <ListGroup.Item>Income for 'month'</ListGroup.Item>
                <ListGroup.Item>$xxx</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item>Income needed to fund budget</ListGroup.Item>
                <ListGroup.Item>$xxx</ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
                <ListGroup.Item>Income available for Funding</ListGroup.Item>
                <ListGroup.Item>$xxx</ListGroup.Item>
            </ListGroup>
            
            <CategoryGroup />
            <CategoryGroup />
        </>
    );
};

export default MonthlyBudgetView;