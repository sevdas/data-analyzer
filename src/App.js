import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.50,
      date: new Date(2022, 7, 10).toDateString()
    },
    {
      id: "e2",
      title: "New TV",
      amount: 794.12,
      date: new Date(2022, 2, 5).toDateString()
    },
  ]
  return (
    <>
      <h1>
        Let's get started!
      </h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
    </>
  );
}

export default App;
