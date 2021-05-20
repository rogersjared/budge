import React, { useState, useEffect, useReducer } from 'react';
import { localStorageData, localStorage } from './localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './Components/Navbar.jsx';
import MonthlyBudgetView from './Views/MonthlyBudgetView';

//------------------------------Helper Funcs / Expressions ------------------------------------//

const today = new Date();
const currentMonth = today.getMonth() + 1 + '-' + today.getFullYear();


const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
});

function sumProperty (categoryGroup, property) {
  const reducer = (sum, currentCategory) => {
    return sum + currentCategory[property];
  }
  return categoryGroup.reduce(reducer, 0);
};

function compileSums (ObjOfObjs, property) {
 var int = Object.keys(ObjOfObjs).reduce((sum, currentObj) => {
    return sum + sumProperty(ObjOfObjs[currentObj], property);
  }, 0)
  return int;
};

function sumTransactions (transactionArr, targetCategory) {
  const filterCategory = (transaction) => {
      return transaction.category === targetCategory
  }

  var targetTransactions;
  !targetCategory ? targetTransactions = transactionArr : targetTransactions = transactionArr.filter(filterCategory);


  return sumProperty(targetTransactions, 'amount');
};



//---------------------------------------------------------------------------------------------//
//------------------              THE  APP               --------------------------------------//
//--------------                  ᕙ(⇀‸↼‶)ᕗ                   ----------------------------------//
//---------------------------------------------------------------------------------------------//

function App() {
  //---------------------------- //State Management\\ ----------------------------
  //Selected Month
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  let monthRoot = localStorageData.months[selectedMonth];

  //Selected View

  //Data for selected month
  const [categories, setCategories] = useReducer(reducer, monthRoot.categories);
  const [monthData, setMonthData] = useReducer(reducer, monthRoot.data);

  
  //--------------------------- //Aggregation Funcs\\ -----------------------------
  


  //-------------------------- //Centralized Access\\ ----------------------------
  const contextData = {
    selectedMonth, setSelectedMonth, categories, setCategories, 
  }
  
  //------------------------------ //Rendering\\ ---------------------------------
  return (
    <localStorage.Provider value={contextData}>
      <div className="App">
        <AppNav />
        <div id="currentView" >
        <MonthlyBudgetView monthData={monthData} categories={categories}/>
        </div>
      </div>
    </localStorage.Provider>
  );
};

export default App;
