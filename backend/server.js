const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const employees = [
  { id: 1, name: "Kumaresh", role: "DevOps Engineer" },
  { id: 2, name: "Prem", role: "Cloud Engineer" },
  { id: 3, name: "Likhith", role: "Software Engineer" }
];

app.get("/", (req, res) => {
  res.send("Backend API is running successfully!");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
