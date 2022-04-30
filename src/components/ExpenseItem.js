import './ExpenseItem.css'

export default function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>April 30th 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <p className="expense-item__price">£290</p>
            </div>
        </div>

    )

}