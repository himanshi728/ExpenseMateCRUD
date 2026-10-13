import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  NotepadText,
  Wallet,
} from "lucide-react";

const BalanceCard = () => {
  return (
    <div className="grid grid-cols-4 gap-3">

      {/* Total Balance */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <Wallet className="text-blue-600" size={24} />
        <div className="text-gray-500 mt-3">Total Balance</div>
        <div className="text-2xl font-bold">₹ 12,345</div>
      </div>

      {/* Total Income */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <BanknoteArrowUp className="text-green-600" size={24} />
        <div className="text-gray-500 mt-3">Total Income</div>
        <div className="text-2xl font-bold">₹ 15,000</div>
      </div>

      {/* Total Expenses */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <BanknoteArrowDown className="text-red-500" size={24} />
        <div className="text-gray-500 mt-3">Total Expenses</div>
        <div className="text-2xl font-bold">₹ 2,655</div>
      </div>

      {/* Weekly Spending */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <NotepadText className="text-purple-600" size={24} />
        <div className="text-gray-500 mt-3">
          This Week's Spending
        </div>
        <div className="text-2xl font-bold">₹ 1,200</div>
      </div>

    </div>
  );
};

export default BalanceCard;