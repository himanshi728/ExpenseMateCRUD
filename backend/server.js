const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors"); // 1. Import CORS
const expenseRoutes = require("./routes/expense");

const app = express();

// 2. Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  }),
);

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
