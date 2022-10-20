import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    }
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}￦</div>
            </div>
            {/*clickHandler()를 하면 렌더링과 동시에 바로 너무일짝 실행됨->()를 빼주면 리액트가 기억하다가 버튼클릭시만 실행.*/}
            <button onClick={clickHandler}>제목 바꾸기</button>
        </Card>
    ) ;
}

export default ExpenseItem;