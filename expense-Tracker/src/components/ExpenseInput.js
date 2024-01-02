import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";
import ExpenseContext from "../store/expenseContext";

const ExpenseInput = (props) => {
  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();

  if (props.item !== null) {
    amountRef.current.value = props.item.amount;
    descriptionRef.current.value = props.item.description;
    categoryRef.current.value = props.item.category;
    props.onReset();
  }

  const expenseCtx = useContext(ExpenseContext);

  const submitHandler = (event) => {
    event.preventDefault();
    expenseCtx.addExpense({
        amount: amountRef.current.value,
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
    });
    amountRef.current.value = '';
    descriptionRef.current.value = '';
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
      <Button variant="dark" className="my-2" type="submit">
        Add Expense
      </Button>
    </form>
  );
};

export default ExpenseInput;
