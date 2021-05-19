import React, { useState, useEffect } from 'react';
import localStorageData from './localStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonthlyBudgetView from './Views/MonthlyBudgetView';



//navbar at top for buget / transactions / main <---- use list component tabs instead of navbar maybe
//accounts overview swipes from left

 
function App() {
  const [selectedMonth, setSelectedMonth] = useState('jan_2021');
  const [accounts, updateAccounts] = useState(localStorageData.accounts);
  const [monthData, updateMonthData] = useState(localStorageData.months);


  return (
    <div className="App">
      <div id="currentView" >
      <MonthlyBudgetView month={localStorageData.months[selectedMonth]}/>
      </div>
    </div>
  );
}

export default App;
