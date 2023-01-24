import React, {useState} from "react"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpensesFilter"
import "./Expenses.css"


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString())

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(item => 
        item.date.getFullYear().toString() === filteredYear
    )

    return (
        <Card className="expenses">
            <ExpenseFilter 
                selected={filteredYear}
                onChangeFilter={filterChangeHandler} 
            />
            {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && 
                filteredExpenses.map((expense, index) => (
                    <ExpenseItem
                        key = {index}
                        title = {expense.title}
                        amount = {expense.amount}
                        date = {expense.date}
                    />
            ))}
        </Card>
    )
}

export default Expenses

