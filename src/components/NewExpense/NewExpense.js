import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
    
  const addnewExpense = (expenseObj) => {
    const expenseDate = {
      ...expenseObj,
      id: Math.random().toString(),
    };
    props.addExpenseHandler(expenseDate);
  };
  
  return (
    <div className="new-expense">
      <ExpenseForm addnewExpense={addnewExpense} />
    </div>
  );
}
