import './ExpenseItem.css'

export default function ExpenseItem({ title, amount, date }) {
    const month = date.toLocaleString('en-GB', { month: 'long' }) //localized date and time formats.
    const year = date.getFullYear()
    const day = date.toLocaleString('en-GB', { day: "2-digit" })

    return (
        <div className="expense-item">
            <div>
                <h1>{month}</h1>
                <h2>{year}</h2>
                <h3>{day}</h3>
            </div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <p className="expense-item__price">£{amount}</p>
            </div>
        </div>
    )
}