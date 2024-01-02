import React, { useEffect, useState } from "react";

import ExpenseContext from "./expenseContext";

const ExpenseProvider = (props) => {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://expense-tracker-161e4-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json"
      );
      const data = await res.json();
      if (data !== null) {
        for (let i of Object.values(data)) {
            setExpenseList(prevState => [i, ...prevState])
        }
      }
    }
    getData();
  }, []);

  const addExpenseHandler = async (expense) => {
    const newExpense = { ...expense, key: Math.random().toString() };
    let res = await fetch(
      "https://expense-tracker-161e4-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json",
      {
        method: "POST",
        body: JSON.stringify({
          ...newExpense,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
    res = await fetch(
      `https://expense-tracker-161e4-default-rtdb.asia-southeast1.firebasedatabase.app/expenses/${data.name}.json`
    );
    data = await res.json();
    setExpenseList((prevState) => [data, ...prevState]);
  };

  const expenseProvider = {
    expenseList: expenseList,
    addExpense: addExpenseHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseProvider}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
