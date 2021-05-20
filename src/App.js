import React, { useState, useEffect, useReducer } from 'react';
import { localStorageData, localStorage } from './localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './Components/Navbar.jsx';
import MonthlyBudgetView from './Views/MonthlyBudgetView';

const today = new Date();
const currentMonth = today.getMonth() + 1 + '-' + today.getFullYear();

const reducer = (prevState, updatedProperty) => ({
  ...prevState,
  ...updatedProperty,
});

////
function App() {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  let monthRoot = localStorageData.months[selectedMonth];
  const [categories, setCategories] = useReducer(reducer, monthRoot.categories);
  const [monthData, setMonthData] = useReducer(reducer, monthRoot.data);

  useEffect(() => {
    monthRoot = localStorageData.months[selectedMonth];
    setCategories(monthRoot.categories);
    setMonthData(monthRoot.data);
  }, [selectedMonth]);

  const contextData = {
    selectedMonth, setSelectedMonth, categories, setCategories, monthRoot
  }


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
}

export default App;
