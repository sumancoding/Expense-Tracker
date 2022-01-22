import React, { useState, useEffect } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./NewExpense/NewExpense";

let expensesDummy = [];

function App() {
  const [expenses, setExpenses] = useState(expensesDummy);

  // useEffect doesn't allow to run on a loop. Blank dependency will allow to run once only.
  //Only run if there's any change in dependency array
   function fetchData(){
      fetch("https://localhost/sample-api/api/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setExpenses(data);
        });
  useEffect(() => {
   fetchData();
    
  }, []);
  // Basic Fetch Request
  // fetch('http://example.com/movies.json). This can be any URL
  // .then(response => response.json). All the responses in JSON
  //.then(data=> console.log(data));   Actual data will be retrieved

  //Similarly, App is parent for NewExpense so creating a function so that it can be passed
  //creating a vraiable in the parameter, this paramter recieves the data
  //Expense is the new object and expenses is the old object, copied with spread operator
  const addExpenseHandler = (expense) => {
    {
      /* const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense); //This way value can be updated*/
    }
    fetch("https://localhost/sample-api/api/", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-type": "application/json",
      },
    }).then( response => {
      fetchData();
    }
    );
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;