// App title, icon user profile

import { Wallet, Bell} from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-4 mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <Wallet className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900 leading-tight">
          ExpenseMate
          </h1>
          <p className="text-xs text-gray-500">Track your money simply.</p>
        </div>
      </div>

      <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100 transition">
        <Bell className="w-5 h-5" />
      </button>
    </header>
  );
}
