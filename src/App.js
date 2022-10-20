import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
    const expenses = [
        {
            id: 'e1',
            title: '허먼밀러',
            amount: '350,000',
            date: new Date(2022, 7, 14),
        },
        { id: 'e2', title: '비싼 TV', amount: '500,000', date: new Date(2022, 2, 12) },
        {
            id: 'e3',
            title: '엄청 멋있는 차',
            amount: '3000',
            date: new Date(2022, 2, 28),
        },
        {
            id: 'e4',
            title: '모션데스크 (Wooden)',
            amount: '45,000',
            date: new Date(2022, 5, 12),
        },
    ];

    const addExpenseHandlser = expense =>{
        console.log('In App.js');
        console.log(expense);
    };

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandlser}/>
        <Expenses data={expenses}/>
    </div>
  );
}

export default App;
