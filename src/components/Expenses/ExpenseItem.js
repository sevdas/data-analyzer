import React from 'react'
import Card from "../UI/Card"
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export default function ExpenseItem({ title, amount, date }) {

    const clickHandler = () => {
        console.log('Clicked!')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <p className="expense-item__price">£{amount}</p>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}