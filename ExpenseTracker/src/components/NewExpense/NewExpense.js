import React, { useState } from "react"

import ExpenseForm from "./ExpenseForm";

import './NewExpense.css';

const NewExpense = (props) => {
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }

    const returnToButton = () => {
        setExpenseForm(button);
    }
    
    const addNewExpenseHandler = () => {
        setExpenseForm(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={returnToButton}/>)
    }

    const button = <button onClick={addNewExpenseHandler}>Add New Expense</button>;
    const [expenseForm, setExpenseForm] = useState(button);

    return (
        <div className="new-expense">
            {expenseForm}
        </div>
    );
}

export default NewExpense;
