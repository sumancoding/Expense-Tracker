import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//To recieve from child to parent
// Create a function in parent and pass it through as a props to child
// Same way can be used to take it to App.js also

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    {
      /* Copying all the object properties usine spread operator. In this case evrything is being copied to expenseData from  enteredExpenseData*/
    }
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random().toString() * 1000),
    };
    {
      /* The purpose of using id is to see that passing and working in parent is only is also possible*/
    }
    props.onAddExpense(expenseData);
    console.log(expenseData);
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
