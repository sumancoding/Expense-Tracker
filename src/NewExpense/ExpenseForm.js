import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label htmlFor="title"> Title </label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={(e) => {
              setEnteredTitle(e.target.value);
            }}
          />
        </div>
        <div className="new-expense_control">
          <label htmlFor="amount"> Amount </label>
          <input
            type="numbers"
            id="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(e) => {
              setEnteredAmount(e.target.value);
            }}
          />
        </div>
        <div className="new-expense_control">
          <label htmlFor="date">Date </label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            onChange={(e) => {
              setEnteredDate(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
