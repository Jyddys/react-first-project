import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"


function Expenses(props) {

    return (
        <div className="expenses">
            <ExpenseItem
                title = {props.expenses[0].title}
                amount = {props.expenses[0].amount}
                date = {props.expenses[0].date}
                />
                <ExpenseItem
                title = {props.expenses[1].title}
                amount = {props.expenses[1].amount}
                date = {props.expenses[1].date}
                />
                <ExpenseItem
                title = {props.expenses[2].title}
                amount = {props.expenses[2].amount}
                date = {props.expenses[2].date}
                />
                <ExpenseItem
                title = {props.expenses[3].title}
                amount = {props.expenses[3].amount}
                date = {props.expenses[3].date}
                />
        </div>
    )
}

export default Expenses


/* <ExpenseItem
      title = {expenses[0].title}
      amount = {expenses[0].amount}
      date = {expenses[0].date}
      />
      <ExpenseItem
      title = {expenses[1].title}
      amount = {expenses[1].amount}
      date = {expenses[1].date}
      />
      <ExpenseItem
      title = {expenses[2].title}
      amount = {expenses[2].amount}
      date = {expenses[2].date}
      />
      <ExpenseItem
      title = {expenses[3].title}
      amount = {expenses[3].amount}
      date = {expenses[3].date}
      /> */