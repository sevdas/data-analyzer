import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense"

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.50,
      date: new Date(2022, 7, 10)
    },
    {
      id: "e2",
      title: "New TV",
      amount: 794.12,
      date: new Date(2022, 2, 5)
    },
  ]

  return (
    <>
      <NewExpense />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
