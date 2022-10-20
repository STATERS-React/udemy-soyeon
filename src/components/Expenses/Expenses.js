import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
function Expenses(props){
    return(
        <Card className="expenses">
            {props.data.map((item,i)=>(
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                    key={i}/>
            ))}
        </Card>
    );
}
export default Expenses;