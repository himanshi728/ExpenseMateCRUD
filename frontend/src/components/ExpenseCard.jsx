import  { useState } from 'react';

import { Plus, ChevronDown } from "lucide-react";

export default function AddExpenseCard() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [type, setType] = useState('expense');
const [date, setDate] = useState(
  new Date().toISOString().split('T')[0]
);
 
const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Form submitted");

  const expense = {
    title,
    amount: Number(amount),
    category,
    type,
    date,
  };

  console.log("Expense data entered:", expense);

  try {
    const response = await fetch("/api/expenses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expense),
    });

    console.log("API response status:", response.status);

    const json = await response.json();

    console.log("Backend response data:", json);

    if (!response.ok) {
      throw new Error(json.error || "Failed to add expense");
    }

    console.log("Expense added successfully!");

    // Reset the form
    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("expense");
    setDate(new Date().toISOString().split("T")[0]);

  } catch (error) {
    console.error("Error adding expense:", error.message);
  }
};


  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm font-sans">
      <h2 className="text-xl font-bold text-[#0d1727] mb-6">Add an expense</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Expense Title */}
        <div className="space-y-2">
          <label 
            htmlFor="expense-title" 
            className="block text-sm font-semibold text-[#374151]"
          >
            Expense title
          </label>
          <input
            id="expense-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Lunch"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base text-[#111827] placeholder:text-gray-400"
          />
        </div>
<div className="space-y-2">
  <label
    htmlFor="date"
    className="block text-sm font-semibold text-[#374151]"
  >
    Date
  </label>

  <input
    id="date"
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    className="w-full rounded-xl border border-gray-200 px-4 py-3"
    required
  />
</div>
        {/* Amount & Category Row */}
        <div className="grid grid-cols-2 gap-4">
          {/* Amount */}
          <div className="space-y-2">
            <label 
              htmlFor="amount" 
              className="block text-sm font-semibold text-[#374151]"
            >
              Amount (₹)
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400 font-medium">₹</span>
              <input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="e.g. 250"
                className="w-full rounded-xl border border-gray-200 pl-8 pr-4 py-3 text-base text-[#111827] placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label 
              htmlFor="category" 
              className="block text-sm font-semibold text-[#374151]"
            >
              Category
            </label>
            <div className="relative">
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full  rounded-xl border border-gray-200 bg-white px-4 py-3 text-base text-[#111827]   pr-10"
              >
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Entertainment">Entertainment</option>
              </select>

              {/* Custom Down Arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-600">
              
             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-gray-600">
             <ChevronDown size={18} />
             </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
       
       <button
           type="submit"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#035933] py-3.5 px-4 text-base font-semibold text-white cursor-pointer shadow-sm"
        >
        <Plus size={20} strokeWidth={2.5} />
        Add Expense
      </button>
        
      </form>
    </div>
  );
}