import React from "react";

import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.items.length == 0) {
        return <h2 className="expenses-list__fallback">Found no Expenses</h2>
    }
    if (props.items.length == 1) {
        return (
            <>
            <ul className="expenses-list">
                {props.items.map((item) => (
                    <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    location={item.location}
                />
                ))}
            </ul>
            <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
            </>);
    }
    return (<ul className="expenses-list">
        {props.items.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
                location={item.location}
            />
        ))}
    </ul>
    );
}

export default ExpensesList;