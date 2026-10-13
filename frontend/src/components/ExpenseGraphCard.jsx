
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", amount: 200 },
  { day: "Tue", amount: 450 },
  { day: "Wed", amount: 300 },
  { day: "Thu", amount: 600 },
  { day: "Fri", amount: 400 },
  { day: "Sat", amount: 800 },
  { day: "Sun", amount: 550 },
];

export default function ExpenseGraphCard() {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800">
        Spending Overview
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Your weekly expenses
      </p>

      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
            />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip
              formatter={(value) => [`₹${value}`, "Expenses"]}
            />

            <Line
              type="monotone"
              dataKey="amount"
              stroke="#0D9488"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}