import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;
  // const locationOfExpenditure = "Mumbai";

  return React.createElement(
    Card,
    {className: "expense-item"},
    React.createElement(ExpenseDate, {date: props.date}),
    React.createElement(ExpenseDetails, {amount: props.amount, location: props.location, title: props.title})
  )

  // return (
  //   <Card className="expense-item">
  //     <ExpenseDate  date={props.date}/>
  //     <ExpenseDetails amount={props.amount} location={props.location} title={props.title}/>
  //   </Card>
  // );
}

export default ExpenseItem;
