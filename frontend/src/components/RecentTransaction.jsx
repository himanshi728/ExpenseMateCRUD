import TransactionItem from "./TransactionItem";

export default function RecentTransactions({ expenses }) {
   const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <section className="w-full max-w-md mx-auto p-4 space-y-4">
      {/* Header rendered once */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Recent expenses
        </h3>
        <button onClick={handleClick}
         className="text-sm font-semibold text-emerald-800 hover:text-emerald-900 transition-colors">
          View all
        </button>
      </div>

      {/* Renders each expense row */}
      <div className="space-y-3">
        {expenses.map((expense) => (
          <TransactionItem
            key={expense._id}
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
          />
        ))}
      </div>
    </section>
  );
}