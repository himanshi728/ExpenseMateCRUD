
import {
  Utensils,
  Plane,
  ShoppingBag,
  House,
  Ellipsis,
} from "lucide-react";

const ExpenseCategory = () => {
  const categories = [
    {
      name: "Food",
      percentage: 30,
      Icon: Utensils,
      iconStyle: "bg-orange-100 text-orange-600",
    },
    {
      name: "Transport",
      percentage: 20,
      Icon: Plane,
      iconStyle: "bg-blue-100 text-blue-600",
    },
    {
      name: "Shopping",
      percentage: 15,
      Icon: ShoppingBag,
      iconStyle: "bg-purple-100 text-purple-600",
    },
    {
      name: "Bills",
      percentage: 25,
      Icon: House,
      iconStyle: "bg-emerald-100 text-emerald-600",
    },
    {
      name: "Others",
      percentage: 10,
      Icon: Ellipsis,
      iconStyle: "bg-pink-100 text-pink-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Expenses by Category
      </h2>

      <div className="space-y-4">
        {categories.map(({ name, percentage, Icon, iconStyle }) => (
          <div
            key={name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl ${iconStyle}`}
              >
                <Icon size={20} strokeWidth={2} />
              </div>

              <span className="text-sm font-medium text-gray-700">
                {name}
              </span>
            </div>

            <span className="text-sm font-semibold text-gray-800">
              {percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseCategory;

     