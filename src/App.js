import Expenses from './components/Expenses';

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
      <h1>
        Let's get started!
      </h1>
      <Expenses items={expenses} />
    </>
  );
}

export default App;
