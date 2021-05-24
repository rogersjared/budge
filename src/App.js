import React, { useState, useEffect, useReducer } from 'react';
import { localStorageData, localStorage } from './localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonthlyBudgetView from './Views/MonthlyBudgetView';
import TransactionsView from './Views/TransactionsView';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//-----------------------------------------------------------------------------//
  //    -------------     //Helper Funcs & Expressions\\    --------------- 
  //-----------------------------------------------------------------------------//

const today = new Date();
const currentMonth = today.getMonth() + 1 + '-' + today.getFullYear();


function reducer (prevState, updatedProperty) {
  return {
    ...prevState,
    ...updatedProperty,
  };
} ;

function sumCategoriesProperty(categories, property) {
  const categoryIds = Object.keys(categories);

  const propReducer = (sum, categoryId) => {
    return sum + Number(categories[categoryId][property]);
  }
  // const test = categoryIds.reduce(propReducer, 0);
  let sum = 0;
  categoryIds.forEach((id) => {
    sum += Number(categories[id][property])
  })
  return sum
}


function sumProperty (categoryGroup, property) {
  const propReducer = (sum, currentCategory) => {
    return sum + Number(currentCategory[property]);
  }
  return categoryGroup.reduce(propReducer, 0);
};

function compileSums (ObjOfObjs, property) {
 return Object.keys(ObjOfObjs).reduce((sum, currentObj) => {
    return sum + sumProperty(ObjOfObjs[currentObj], property);
  }, 0);
};

function sumTransactions (transactionArr, targetCategory) {
  const filterCategory = (transaction) => {
      return transaction.category === targetCategory
  }

  let targetTransactions;
  !targetCategory ? targetTransactions = transactionArr : targetTransactions = transactionArr.filter(filterCategory);
  return sumProperty(targetTransactions, 'amount');
};





function App() {
  //-----------------------------------------------------------------------------//
  //    --------------------     //State Management\\     --------------------    
  //-----------------------------------------------------------------------------//

  //Year's Data
  const [yearData, setYearData] = useReducer(reducer, localStorageData);

  //Selected Month
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  //Selected View

  //Data for selected month
  const [categories, setCategories] = useReducer(reducer, yearData.months[selectedMonth].categoryData.categories);
  const [categoryGroups, setCategoryGroups] = useReducer(reducer, yearData.months[selectedMonth].categoryData.categoryGroups)
  const [monthData, setMonthData] = useReducer(reducer, yearData.months[selectedMonth].data);
  const [transactions, setTransactions] = useReducer(reducer, yearData.months[selectedMonth].transactions)

  //-----------------------------------------------------------------------------//
  //    --------------------    //Data Aggregation\\    ---------------------
  //-----------------------------------------------------------------------------//

  //Categories
  useEffect(()=>{
    const budgeted = sumCategoriesProperty(categories, 'budgeted');
    const funded = sumCategoriesProperty(categories, 'funded');
    console.log('budgeted', budgeted);
    console.log('funded', funded)

    setMonthData({ budgeted, funded })
  }, [categories])

  // Transactions
  useEffect(() => {
    const sums = {total: 0};

    transactions.expenses.forEach((ex) => {
      sums.total += ex.amount;
      sums[ex.categoryId] ? sums[ex.categoryId] += ex.amount : sums[ex.categoryId] = ex.amount;
    })
    Object.keys(sums).forEach((categoryId) => {
      if (categoryId === 'total') {
        setMonthData({
          spent: sums[categoryId]
        })
      } else {
        setCategories({
            [categoryId]: {spent: sums[categoryId]}
        })
      }
    })
  }, [transactions.expenses]);

  //calculate income
  useEffect(()=>{
    const incTranReducer = (sum, currentVal) => {
      if (currentVal.fromAccount === 'income') {
        return sum + Number(currentVal.amount);
      } else {
        return sum;
      };
    }
    const income = transactions.incomeTransfers.reduce(incTranReducer, 0);
    setMonthData({ income });
    }, [transactions]);

  // Update year data if anything changes
  useEffect(() => {
    console.log('cateogory data after a change', categories)
  }, [categories])


  //-----------------------------------------------------------------------------//
  //    -------------------    //Centralized Access\\    ---------------------
  //-----------------------------------------------------------------------------//
  const contextData = {
    categories, setCategories, transactions, setTransactions, categoryGroups, setCategoryGroups
  }
  
//-----------------------------------------------------------------------------//
//----    ----    ----    ----   -  RELEASE    ----    ----    ----    ----    ---//
//   ----    ----    ----    --  T H E    A P P  ----    ----    ----    ----    ----   //
// ----    ----    ----    ----    ----    ----    ----    ----    ----    ----    //
//                                 .-'   `'.
//                                /         \
//                                |  -app-  ;
//                                |         |           ___.--,
//                       _.._     |0) ~ (0) |    _.---'`__.-( (_.
//                __.--'`_.. '.__.\    '--. \_.-' ,.--'`     `""`
//               ( ,.--'`   ',__ /./;   ;, '.__.'`    __
//               _`) )  .---.__.' / |   |\   \__..--""  """--.,_
//              `---' .'.''-._.-'`_./  /\ '.  \ _.-~~~````~~~-._`-.__.'
//                    | |  .' _.-' |  |  \  \  '.               `~---`
//                     \ \/ .'     \  \   '. '-._)
//                      \/ /        \  \    `=.__`~-.
//                      / /\         `) )    / / `"".`\
//                , _.-'.'\ \        / /    ( (     / /
//                 `--~`   ) )    .-'.'      '.'.  | (
//                        (/`    ( (`          ) )  '-;
//                         `      '-;         (-'
//----    ----    ----    ----    ----    ----    ----    ----    ----    ----    ---//
//   ----    ----    ----    ----    ----    ----    ----    ----    ----    ----   //
// ----    ----    ----    ----    ----    ----    ----    ----    ----    ----    //


const [selectedView, setSelectedView] = useState({current: 'budget'})

  const toggleView = (event) => {
    event.preventDefault();
    setSelectedView({current: event.target.name});
  }

  const renderView = () => {
    if (selectedView.current === 'budget') {
      return <MonthlyBudgetView monthData={monthData} categoryGroups={categoryGroups} categories={categories} setCat={setCategories}/>
    } else {
      return <TransactionsView transactions={transactions} />
    }
  }

  return (
    <div style={{maxHeight:'100%'}}>
    <localStorage.Provider value={contextData}>
      <div className="App" style={{maxHeight: '95%', heigth: '95%', minHeight: '95%'}}>
        <Navbar collapseOnSelect size="lg" expand="lg" bg="dark" variant="dark">
      <Container>
        <Row>
            <Col>
              <Navbar.Brand size="lg">Budge</Navbar.Brand>
            </Col>
            <Col>
              <Button name='budget' variant="primary" size="lg" onClick={toggleView}>
                Budget
              </Button>
              </Col>
              <Col>
              <Button name='transactions' variant="primary" size="lg" onClick={toggleView}>
                Transactions
              </Button>
              </Col>
          </Row>
        </Container>
        </Navbar>
        <div id="currentView" style={{ maxHeight: '70%', heigth: '50%', margin: 'auto', overflowY: 'hidden'}}>
        {renderView()}
        </div>

<br/>
<br/>
        <Nav justify variant="tabs" defaultActiveKey="/currentMonth">
  <Nav.Item>
    <Nav.Link >JAN</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >FEB</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >MAR</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >APR</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >MAY</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >JUN</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >JUL</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >AUG</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >SEP</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >OCT</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >NOV</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link >DEC</Nav.Link>
  </Nav.Item>
  
</Nav>

      </div>
    </localStorage.Provider>
    </div>
  );
};


export default App;
