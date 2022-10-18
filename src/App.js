import Expenses from "./components/Expenses";

function App() {
    const expenses = [
        {
            id: 'e1',
            title: '허먼밀러',
            amount: 94.12,
            date: new Date(2022, 7, 14),
        },
        { id: 'e2', title: '비싼 TV', amount: 799.49, date: new Date(2022, 2, 12) },
        {
            id: 'e3',
            title: '엄청 멋있는 차',
            amount: 294.67,
            date: new Date(2022, 2, 28),
        },
        {
            id: 'e4',
            title: '모션데스크 (Wooden)',
            amount: 450,
            date: new Date(2022, 5, 12),
        },
    ];
  return (
    <div>
      <h2>즐거운 리액트시간</h2>
        <Expenses data={expenses}/>
    </div>
  );
}

export default App;
