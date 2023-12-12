import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear() == filteredYear;
  });

  //   let expensesContent = <p style={{ color: "white" }}>No Expenses Found</p>;

  //   if (filteredItems.length > 1) {
  //     expensesContent = filteredItems.map((item) => (
  //       <ExpenseItem
  //         key={item.id}
  //         title={item.title}
  //         amount={item.amount}
  //         date={item.date}
  //         location={item.location}
  //       />
  //     ));
  //   }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredItems}/>
      <ExpensesList items={filteredItems}/>
      {/* {expensesContent} */}
      {/* {filteredItems.length == 0 && (
        <p style={{ color: "white" }}>No Expenses Found</p>
      )}
      {filteredItems.length > 0 &&
        filteredItems.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.location}
          />
        ))}

      {filteredItems.length == 1 && (
        <p style={{ color: "white" }}>Only single Expense here. Please add more...</p>
      )} */}

      {/* <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
                location={props.items[1].location}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
                location={props.items[2].location}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
                location={props.items[3].location}
            /> */}
    </Card>
  );
}

export default Expenses;
