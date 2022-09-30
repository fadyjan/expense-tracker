import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart"
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const FiltredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  let rederdContent = <h1> There are No Expenses Found In This Year</h1>;
  if (FiltredExpense.length > 0) {
    rederdContent = FiltredExpense.map((item) => {
      return (
        <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
      );
    });
  }
  return (
    <div>
    <Card className="expenses">
    <ExpensesChart expenses = {FiltredExpense}></ExpensesChart>

      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {rederdContent}
    </Card>
    </div>
  );
};

export default Expenses;
