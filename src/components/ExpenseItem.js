import './ExpenseItem.css'

export default function ExpenseItem({ title, amount, date }) {
    // const expenseDate = new Date(2022, 3, 30).toDateString()

    return (
        <div className="expense-item">
            <div>{date}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <p className="expense-item__price">£{amount}</p>
            </div>
        </div>
    )
}