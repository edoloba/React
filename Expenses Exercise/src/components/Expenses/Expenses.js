import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2021')
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }
  
  const filteredExpenses = props.items.filter(items => {
    return items.date.getFullYear().toString() === filteredYear;
  });

  
  
  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter 
    selected={filteredYear} 
    onChangeFilter= {filterChangeHandler}/>
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items={filteredExpenses}/>
    
      {/* <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      ></ExpenseItem> */}
    </Card>
    </div>
  );
}

export default Expenses;
