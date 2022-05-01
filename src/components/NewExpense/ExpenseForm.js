import React from 'react'
import './ExpenseForm.css'

export default function ExpenseForm() {
    return (
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="namedInput">Title:</label>
                    <input id="namedInput" type="text" name="title" />
                </div>
                <div className="new-expense__controls">
                    <label htmlFor="amountInput">Amount:</label>
                    <input id="amountInput" type="number" name="amount" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__controls">
                    <label htmlFor="dateInput">Date:</label>
                    <input id="dateInput" type="date" name="date" min="2019-01-01" max="2022-12-31" />
                </div>
                <div className="new-expense__actions">
                    <button type="submit">
                        Add Expens
                    </button>
                </div>
            </div>
        </form>
    )
}
