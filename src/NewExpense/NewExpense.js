import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//To recieve from child to parent
// Create a function in parent and pass it through as a props to child
// Same way can be used to take it to App.js also

function NewExpense() {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(enteredExpenseData);
    {
      /* Recieving through any variable name */
    }
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
