import express from "express";
import db from "../db.js";

const router = express.Router();

// Middleware to simulate logged-in user
router.use((req, res, next) => {
  if (!req.session.userId) {
    req.session.userId = 1; // temp for testing
  }
  next();
});

// GET user profile
router.get("/", (req, res) => {
  const userId = req.session.userId;

  db.query("SELECT name, email, phone FROM users WHERE id = ?", [userId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(result[0]);
  });
});

// UPDATE user profile
router.put("/", (req, res) => {
  const userId = req.session.userId;
  const { name, email, phone } = req.body;

  db.query(
    "UPDATE users SET name=?, email=?, phone=? WHERE id=?",
    [name, email, phone, userId],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Profile updated successfully" });
    }
  );
});

export default router;
