import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpenses.css';

const NewExpenses = (props) =>{
    const [isEditing,setEditing] = useState(false);

    const saveExpenseData = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false);
        //console.log(expenseData);
    }
    const startEditingHandler = () =>{
        setEditing(true);
    }
    const stopEditingHandler = () =>{
        setEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpenses;