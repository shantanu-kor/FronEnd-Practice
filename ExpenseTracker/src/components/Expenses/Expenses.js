import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css'
import Card from "../UI/Card";

function Expenses(props){
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filterItems = props.items.filter((item) => {
        return item.date.getFullYear() == filteredYear;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filterItems.map((item) => (
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    location={item.location}
                />
            ))}
            
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