import { UtensilsCrossed } from "lucide-react";

export default function TransactionItem({ title, amount, category }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 flex items-center justify-center bg-[#E5FAF0] text-[#00A86B] rounded-2xl">
          <UtensilsCrossed className="w-6 h-6 stroke-[2.2]" />
        </div>
        <div className="space-y-0.5">
          <h3 className="font-bold text-slate-900 text-lg leading-tight">
            {title}
          </h3>
          <p className="text-sm text-slate-400 font-medium">
            {category}
          </p>
        </div>
      </div>

      <span className="text-lg font-bold text-slate-900">
        -₹{amount}
      </span>
    </div>
  );
}