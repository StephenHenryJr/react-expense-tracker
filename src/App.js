import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import { DarkMode } from './components/DarkMode';

function App() {
   //setting darkMode using useState
  //if darkMode is true, the icon will change and dark-mode class will be added to container div
  const [darkMode, setDarkModeIcon] = useState(false);
  const toggleIcon = () => {
    setDarkModeIcon(!darkMode);
  };
  return (
    <GlobalProvider>
      <Header header="Expense Tracker" />
      <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <DarkMode darkMode={darkMode} toggleIcon={toggleIcon}/>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
