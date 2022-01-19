import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item1">
        <h2> {props.title}</h2>
        <div className="expense-item2"> {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
