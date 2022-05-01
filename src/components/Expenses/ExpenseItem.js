import React from 'react'
import Card from "../UI/Card"
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem({ title, amount, date }) {

    const [newTitle, setNewTitle] = React.useState(title)

    const clickHandler = () => {
        setNewTitle('Updated!');
        console.log('newTitle', newTitle)
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <p className="expense-item__price">£{amount}</p>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}