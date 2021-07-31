import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
import AddNewExpense from "./AddNewExpense";



const NewExpense = (props) => {
    const [displayNewButton, setDisplayNewButton] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

 
  const displayNewButtonHandler = (value) => {
    setDisplayNewButton(value);
  };
  
  if (displayNewButton) {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onDisplayNewButton={displayNewButtonHandler}/>
      </div>
    )
  } else {
    return (
      <div className="new-expense">
        <AddNewExpense onDisplayNewButton={displayNewButtonHandler}>Add New Expense</AddNewExpense>
      </div>
    )
  }
};

export default NewExpense;
