import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Banglore",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12), location: "Mumbai" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Delhi"
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Pune"
    },
  ]);
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Expense Items"),
  //   React.createElement(Expenses, {items: expenses})
  // )

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
