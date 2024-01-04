import { createSlice } from "@reduxjs/toolkit";

const initialExpenseState = { expenses: [] };

const expenseSlice = createSlice({
  name: "expenses",
  initialState: initialExpenseState,
  reducers: {
    addExpense(state, action) {
      state.expenses = [action.payload, ...state.expenses];
    },
    renewExpense(state) {
        state.expenses = [];
    }
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
