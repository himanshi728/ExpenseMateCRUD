import TransactionItem from "./TransactionItem";

export default function RecentTransactions({ expenses = [] }) {
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
        <button
          onClick={handleClick}
          className="text-sm font-semibold text-emerald-800 hover:text-emerald-900 transition-colors"
        >
          View all
        </button>
      </div>

      {/* Renders each expense row with scroll support and key fallback */}
      <div className="space-y-3  overflow-y-auto pr-1">
        {expenses.length === 0 ? (
          <p className="text-sm text-slate-500 text-center py-4">
            No expenses found.
          </p>
        ) : (
          expenses.map((expense, index) => (
            <TransactionItem
              key={expense._id || expense.id || index}
              title={expense.title || expense.name}
              amount={expense.amount}
              category={expense.category}
            />
          ))
        )}
      </div>
    </section>
  );
}