import React, { useState } from "react"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    console.log(props.key)


    const deleteHander = () => {
        props.removeItem(props.id)
    }
    

    return (
        <li>
        <Card className="expense-item">
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={deleteHander}>Remove item</button>
            </div>
        </Card>       
        </li>
    )
}

export default ExpenseItem