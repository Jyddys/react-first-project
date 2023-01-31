import React, {useState} from "react"
import Card from "../UI/Card"
import ExpenseFilter from "./ExpensesFilter"
import "./Expenses.css"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"


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
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={props.expenses} items={filteredExpenses} removeItem={props.removeItem}/>
        </Card>
    )
}

export default Expenses

