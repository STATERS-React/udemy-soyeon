import './ExpenseForm.css'

const ExpenseForm = () => {
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>항목이름</label>
                    <input type='text'/>
                </div>
                <div className='new-expense__control'>
                    <label>가격</label>
                    <input type='number' min="0.01" step="0.01"/>
                </div>
                <div className='new-expense__control'>
                    <label>날짜</label>
                    <input type='date' min="2018-01-01" step="2023-12-31"/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>추가하기</button>
                </div>
            </div>
        </form>
    )
}
export default ExpenseForm