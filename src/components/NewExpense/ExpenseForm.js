import './ExpenseForm.css'
import {useState} from "react";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event)=>{
      event.preventDefault(); // 페이지가 reloae 되는 것을 방지
      const expenseData = {
          title:enteredTitle,
          amount:enteredAmount,
          date: new Date(enteredDate)
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>항목이름</label>
                    <input type='text'
                           value={enteredTitle}
                           onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>가격</label>
                    <input type='number'
                           min="0.01"
                           step="0.01"
                           value={enteredAmount}
                           onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>날짜</label>
                    <input type='date'
                           min="2018-01-01"
                           max="2023-12-31"
                           value={enteredDate}
                           onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit' >추가하기</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm