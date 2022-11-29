import React, { useReact, useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [clickedButton, setClickedButton] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setClickedButton(false);
  };

  const addExpenseBtnHandler = () => {
    setClickedButton(true);
  };

  const closeExpensesForm = () => {
    setClickedButton(false);
  };

  return (
    <div className="new-expense">
      {!clickedButton && (
        <button onClick={addExpenseBtnHandler}>Add New Expense</button>
      )}
      {clickedButton && (
        <ExpenseForm
          onCancelBtn={closeExpensesForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
