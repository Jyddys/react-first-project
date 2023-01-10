import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import React from "react"


function Expenses(props) {

    const items = props.expenses.map((expense, index) => (
        <ExpenseItem
                key={index}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
        />
    ))
        

    return (
        <div className="expenses">
            {items}
        </div>
    )
}

export default Expenses

