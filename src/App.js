import ExpenseItem from "./components/ExpenseItem";

function App() {
  let expenseDate = new Date(2021, 3, 8);
  let expenseTitle = "Transportation";
  let expenseAmount = 100;
  return (
    <div>
      <h1> Expenses Tracker </h1>
      <ExpenseItem
        date={expenseDate}
        title={expenseTitle}
        amount={expenseAmount}
      />
    </div>
  );
}

export default App;
