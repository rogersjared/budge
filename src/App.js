import React, { useState, useEffect, useReducer } from 'react';
import { localStorageData, localStorage } from './localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './Components/Navbar.jsx';
import MonthlyBudgetView from './Views/MonthlyBudgetView';
import TransactionsView from './Views/TransactionsView';

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

  //Selected Month
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  let monthRoot = localStorageData.months[selectedMonth];

  //Selected View

  //Data for selected month
  const [categories, setCategories] = useReducer(reducer, monthRoot.categories);
  const [monthData, setMonthData] = useReducer(reducer, monthRoot.data);
  const [transactions, setTransactions] = useReducer(reducer, monthRoot.transactions)

  //-----------------------------------------------------------------------------//
  //    --------------------    //Data Aggregation\\    ---------------------
  //-----------------------------------------------------------------------------//
  useEffect(()=>{
    const budgeted = compileSums(categories, 'budgeted');
    const funded = compileSums(categories, 'funded');
    const spent = compileSums(categories, 'spent');
    setMonthData({ budgeted, funded, spent })
  }, [categories])

  useEffect(()=>{
    console.log(monthData);
  }, [monthData]);


  //-----------------------------------------------------------------------------//
  //    -------------------    //Centralized Access\\    ---------------------
  //-----------------------------------------------------------------------------//
  const contextData = {
    categories, setCategories, transactions, setTransactions
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

  return (
    <localStorage.Provider value={contextData}>
      <div className="App">
        <AppNav />
        <div id="currentView" >
        <MonthlyBudgetView monthData={monthData} categories={categories}/>
        </div>
        <TransactionsView transactions={transactions} />
      </div>
    </localStorage.Provider>
  );
};


export default App;
