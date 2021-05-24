import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import CategoryGroup from '../Components/MonthlyBudgetComps/CategoryGroup.jsx';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




const MonthlyBudgetView = ({ monthData, categoryGroups, categories, setCat }) => {
    const { monthName, income, budgeted, funded, spent } = monthData;
    const incomeNeeded = budgeted - income;
    const availableForFunding = income - funded;
    
    console.log('MONTH DATA', monthData)
    return (
      <Container className="justify-content-md-left">
        <br />
        <Row className="justify-content-md-left">
        <Col md={4} className="justify-content-md-right">
            <ListGroup horizontal>
                <ListGroup.Item>Income for {monthName}</ListGroup.Item>
                <ListGroup.Item>${income}</ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
            <Row>
            <Col md={4} className="justify-content-md-right">
            <ListGroup horizontal>
                <ListGroup.Item>Income needed to fund budget</ListGroup.Item>
                <ListGroup.Item>${budgeted - income > 0 ? budgeted - income : 0}</ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
            <Row>
            <Col md={4}>
            <ListGroup horizontal>
                <ListGroup.Item>Income available for Funding</ListGroup.Item>
                <ListGroup.Item>${income - funded}</ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
            <br/><br/>
            <CategoryGroup type='variable' categories={categories} assignedCategories={categoryGroups.variable} setCategories={setCat} />
            <br/><br/><br/><br/><br/><br/>
            <CategoryGroup type='monthly' categories={categories} assignedCategories={categoryGroups.monthly} setCategories={setCat} />
        </Container>
    );
};

export default MonthlyBudgetView;