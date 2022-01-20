import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState(props.title);
  const handleChange = () => {
    setTitle(newTitle);
  };

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item1"> </div>
      <h2> {title}</h2>
      <div className="expense-item2">€ {props.amount}</div>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
        }}
      />
      <button onClick={handleChange}> Change Title </button>
    </div>
  );
}

export default ExpenseItem;
