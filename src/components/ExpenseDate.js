
export default function ExpenseDate({ date }) {
    const month = date.toLocaleString('en-GB', { month: 'long' }) //localized date and time formats.
    const year = date.getFullYear()
    const day = date.toLocaleString('en-GB', { day: "2-digit" })

    return (
        <div>
            <h1>{month}</h1>
            <h2>{year}</h2>
            <h3>{day}</h3>
        </div>
    )
}
