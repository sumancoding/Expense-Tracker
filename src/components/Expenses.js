import React from "react";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div>
      {/* Array had been recieved by props.item and map function has bee used so that expense parameter can recieve al the objects*/}
      {/* Curly Braces cannot be used here, instead () should be used.*/}
      {props.item.map((items) => (
        <ExpenseItem
          date={items.date}
          title={items.title}
          amount={items.amount}
        />
      ))}
      {/* Initial hardcode has been replaced by map function, which uses a loop to check all the objects*/}
      {/* <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      />
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      />
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount}
     />*/}
    </div>
  );
}

export default Expenses;
