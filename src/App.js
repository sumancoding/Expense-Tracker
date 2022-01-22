import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./NewExpense/NewExpense";

let expensesDummy = [
  //This is used to initialize only
  {
    id: "e1",
    title: "Transportation",
    amount: "100",
    date: new Date(2022, 1, 20),
  },
  {
    id: "e2",
    title: "Internet",
    amount: "50",
    date: new Date(2022, 1, 1),
  },
  {
    id: "e3",
    title: "Food and Groceries",
    amount: "250",
    date: new Date(2022, 1, 8),
  },
  {
    id: "e4",
    title: "Drinks",
    amount: "150",
    date: new Date(2022, 1, 25),
  },
];

function App() {
  const [expenses, setExpenses] = useState(expensesDummy);

  //Similarly, App is parent for NewExpense so creating a function so that it can be passed
  //creating a vraiable in the parameter, this paramter recieves the data
  //Expense is the new object and expenses is the old object, copied with spread operator
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense); //This way value can be updated
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
