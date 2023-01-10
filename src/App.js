import Expenses from "./components/Expenses"


function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date("2022-07-14"),
    },
    { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49,
      date: new Date("2023-01-12") },
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
      <Expenses expenses={expenses}/>
     <p>Justus Sydänmaa / VAMK / BIT</p>
    </div>
  );
}

export default App;


