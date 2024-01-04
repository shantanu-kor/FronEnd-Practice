import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { expenseActions } from "../store/expense";

const ExpenseInput = (props) => {
  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  const expenses = useSelector(state => state.expense.expenses);

  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i of expenses) {
      sum += Number(i.amount);
    } 
    setTotalExpense(sum);
  },[expenses])

  const dispatch = useDispatch();

  if (props.item !== null) {
    amountRef.current.value = props.item.amount;
    descriptionRef.current.value = props.item.description;
    categoryRef.current.value = props.item.category;
    props.onReset();
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    const expense = {
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
      category: categoryRef.current.value,
    };
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
    dispatch(expenseActions.addExpense(data));
    amountRef.current.value = "";
    descriptionRef.current.value = "";
    categoryRef.current.value = "Food";
  };

  return (
    <form style={{ textAlign: "center" }} onSubmit={submitHandler}>
      <label htmlFor="amount">Amount</label>
      <br />
      <input
        type="number"
        min="0"
        step="0.01"
        id="amount"
        ref={amountRef}
        required
      />
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <textarea id="description" rows="3" ref={descriptionRef} required />
      <br />
      <label htmlFor="category">Category</label>
      <br />
      <select id="category" ref={categoryRef}>
        <option value="Food">Food</option>
        <option value="Petrol">Petrol</option>
        <option value="Salary">Salary</option>
        <option value="Other">Other</option>
      </select>
      <br />
      {totalExpense >= 10000 ? <Button variant="dark" className="my-2">Activate Premium</Button> :
      <Button variant="dark" className="my-2" type="submit">
        Add Expense
      </Button>
      }
    </form>
  );
};

export default ExpenseInput;
