import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"


const NewExpense = (props) => {

    const [isHidden, setIsHidden] = useState(false)

    const toggleForm = () => {
        setIsHidden(hidden => !hidden)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        
        <div className="new-expense">
            {isHidden ? 
            <button onClick={toggleForm}>Add expense</button>
            :
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleForm={toggleForm}
            />
             }
            
        </div>
    )
}

export default NewExpense
