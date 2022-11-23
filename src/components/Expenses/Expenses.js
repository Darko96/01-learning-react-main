import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2021");

  const expenseYearHandler = (enteredExpenseYear) => {
    setEnteredYear(enteredExpenseYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onChangeExpenseYear={expenseYearHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
