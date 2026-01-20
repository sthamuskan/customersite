const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const db = require("./db");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Backend Running"));

app.get("/test-db", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Database connected!" });
  });
});

app.put("/api/profile", (req, res) => {
  const { name, email, phone } = req.body;

  const sql = `
    INSERT INTO users (fullname, email, phone)
    VALUES (?, ?, ?)
    ON DUPLICATE KEY UPDATE
      fullname = VALUES(fullname),
      phone = VALUES(phone)
  `;

  db.query(sql, [name, email, phone], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Profile saved" });
  });
});

app.get("/api/profile", (req, res) => {
  const email = "test@gmail.com";

  db.query("SELECT fullname AS name, email, phone FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0] || { name: "", email, phone: "" });
  });
});

app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
