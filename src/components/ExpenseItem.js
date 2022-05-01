import Card from "./Card"
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem({ title, amount, date }) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <p className="expense-item__price">£{amount}</p>
            </div>
        </Card>
    )
}