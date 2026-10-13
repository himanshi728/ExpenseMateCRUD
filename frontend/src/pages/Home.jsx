 import { useState, useEffect } from "react";
import BalanceCard from "../components/BalanceCard";
import RecentTransactions from "../components/RecentTransaction";
import AddExpenseCard from "../components/ExpenseCard";
import ExpenseGraphCard from "../components/ExpenseGraphCard";
import ExpenseCategory from "../components/ExpenseCategory";


function Home() {
  const [expenses, setExpenses] = useState([]);

useEffect(() => {
  const fetchExpenses = async () => {
    try {
      const response = await fetch("/api/expenses");
      const json = await response.json();
      if (response.ok) {
        setExpenses(json);
      } else {
        console.log("Server error:", response.status, json);
      }
    } catch (error) {
      console.log("Fetch failed:", error);
    }
  };

  fetchExpenses();
}, []);

  console.log("Expenses", expenses);

  return (
    <div>
      <main className="space-y-4">
        {/* Main Total Card */}
        <BalanceCard />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          <ExpenseGraphCard/>
         <ExpenseCategory/>
          <AddExpenseCard />
            <RecentTransactions expenses={expenses}  />
          </div>

       
      </main>
    </div>
  );
}

export default Home;