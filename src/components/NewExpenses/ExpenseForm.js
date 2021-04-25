import React, { useState } from 'react';

import './ExpenseForm.css';
const ExpenseForm = (props) =>{
    //   Method - 1
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //     Method - 2
    // const [enteredValues, setEnteredValue] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) =>{
        //console.log(event);
        setEnteredTitle(event.target.value);

        // setEnteredValue({
        //     ...enteredValues,
        //     enteredTitle: event.target.value
        // });
        // Alternative Method-----------------------------------
        // setEnteredValue((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // });
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);

        // setEnteredValue({
        //     ...enteredValues,
        //     enteredAmount:event.target.value
        // });
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);

        // setEnteredValue({
        //     ...enteredValues,
        //     enteredDate:event.target.value
        // });
    };

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <>
        <div className="new-expense__actions">
            <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31 " value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>
        </form>
        </div>
        
        </>
    )
}

export default ExpenseForm;