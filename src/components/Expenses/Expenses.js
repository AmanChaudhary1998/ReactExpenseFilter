import React, {useState} from 'react';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) =>
{
    const [filteredYear,setFilteredYear] = useState('2021');

    const expenseYear = (expenseYearData) =>{
        setFilteredYear(expenseYearData);
    }
    const filteredExpenses = props.items.filter((expense)=>{
        return (
            expense.date.getFullYear().toString() === filteredYear
        )
    })

    return(
        <>
            <div className="expenses">
            <ExpensesFilter selectedYear={filteredYear} onExpenseYear = {expenseYear} />


            {/* {props.items.map((expense)=>{
                return(
                    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
                )
            })} */}

            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
            </div>
        </>
    )
}

export default Expenses;