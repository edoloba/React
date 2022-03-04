import React from "react";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
    const addFormHandler = () => {
        props.onAddForm(<ExpenseForm/>)
    }
    return (
        <button onClick={addFormHandler}>Add Expense</button>
    )
}

export default AddExpense