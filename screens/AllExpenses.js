import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-contex";

function AllExpenses() {
  const ctx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={ctx.expenses}
      expensesPeriod="Total"
      fallbackText="No expenses registered"
    />
  );
}

export default AllExpenses;
