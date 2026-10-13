const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
// const cors = require("cors");
const expenseRoutes = require("./routes/expense");

const app = express();
// middleware
app.use(express.json());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from expensemate");
});

app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
