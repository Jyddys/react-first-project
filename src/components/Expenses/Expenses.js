import React, {useState} from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpensesFilter"
import "./Expenses.css"


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const items = props.expenses.map((expense, index) => (
        <ExpenseItem
                key = {index}
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
        />
    ))
        
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {items}
        </Card>
    )
}

export default Expenses

