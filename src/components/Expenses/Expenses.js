import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"

export default function Expenses({ items }) {

    return (
        <Card className="expenses">
            <ExpenseItem
                title={items[0].title}
                amount={items[0].amount}
                date={items[0].date} />
            <ExpenseItem
                title={items[1].title}
                amount={items[1].amount}
                date={items[1].date} />
        </Card>
    )
}
