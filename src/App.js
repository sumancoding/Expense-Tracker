import Expenses from "./components/Expenses";
import NewExpense from "./NewExpense/NewExpense";

function App() {
  let expenses = [
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
  return (
    <div>
      <NewExpense />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
