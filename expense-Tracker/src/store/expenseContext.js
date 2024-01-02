import React from "react";

const ExpenseContext = React.createContext({
    expenseList: [],
    addExpense: () => {},
});

export default ExpenseContext;