import React, {useState} from "react"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpensesFilter"
import "./Expenses.css"
import ExpensesList from "./ExpensesList"


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
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses

