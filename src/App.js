import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date("2022-07-14"),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date("2023-01-12") },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 300.00,
      date: new Date("2023-01-01"),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date("2022-05-12"),
    },
  ];


  return (
    <div className="App">
     <ExpenseItem
      title = {expenses[0].title}
      amount = {expenses[0].amount}
      date = {expenses[0].date}
      />
      <ExpenseItem
      title = {expenses[1].title}
      amount = {expenses[1].amount}
      date = {expenses[1].date}
      />
      <ExpenseItem
      title = {expenses[2].title}
      amount = {expenses[2].amount}
      date = {expenses[2].date}
      />
      <ExpenseItem
      title = {expenses[3].title}
      amount = {expenses[3].amount}
      date = {expenses[3].date}
      />

      
    
     <p>Justus Sydänmaa / VAMK / BIT</p>
    </div>
  );
}

export default App;
