const { default: mongoose } = require("mongoose");
const Expense = require("../models/expenseModel");
//
const createExpense = async (req, res) => {
  try {
    const { title, amount, category, type, date } = req.body;

    const expense = await Expense.create({
      title,
      amount,
      category,
      type,
      date,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};
// get req(list of the data )

const getExpense = async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.status(200).json(expenses);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const getExpenseById = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findById(id);

    if (!expense) {
      return res.status(404).json({
        error: "Expense not found",
      });
    }

    res.status(200).json(expense);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const updateExpense = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "No such expense",
    });
  }

  const expense = await Expense.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
  );

  if (!expense) {
    return res.status(404).json({
      error: "Expense not found",
    });
  }

  res.status(200).json(expense);
};

const deleteExpense = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such expense" });
  }

  const expense = await Expense.findOneAndDelete({ _id: id });

  if (!expense) {
    return res.status(404).json({
      error: "Expense not found",
    });
  }

  res.status(200).json(expense);
};

module.exports = {
  createExpense,
  getExpense,
  getExpenseById,
  updateExpense,
  deleteExpense,
};
