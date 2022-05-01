import "./ExpenseDate.css"

export default function ExpenseDate({ date }) {
    const month = date.toLocaleString('en-GB', { month: 'long' }) //localized date and time formats.
    const year = date.getFullYear()
    const day = date.toLocaleString('en-GB', { day: "2-digit" })

    return (
        <div className="expense-date">
            <h1 className="expense-date__month">{month}</h1>
            <h2 className="expense-date__year">{year}</h2>
            <h3 className="expense-date__day">{day}</h3>
        </div>
    )
}
