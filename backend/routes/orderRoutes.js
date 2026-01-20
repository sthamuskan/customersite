const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../db");

// Multer for payment screenshot
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// PLACE ORDER
router.post("/", upload.single("paymentProof"), (req, res) => {
  const {
    fullName,
    address,
    phone,
    paymentMethod,
    subtotal,
    shipping,
    total,
    items,
  } = req.body;

  const paymentProof = req.file ? req.file.path : null;

  const sql = `
    INSERT INTO orders
      (fullname, address, phone, paymentMethod, subtotal, shipping, total, items, paymentProof)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      fullName,
      address,
      phone,
      paymentMethod,
      subtotal,
      shipping,
      total,
      JSON.stringify(items),
      paymentProof,
    ],
    (err, result) => {
      if (err) return res.status(500).json(err);

      // If online payment, return QR / instructions
      if (paymentMethod === "online") {
        return res.json({
          success: true,
          orderId: result.insertId,
          message: "Upload screenshot after paying via eSewa/Khalti",
          qr: "/uploads/sample-qr.png", // you can put a sample QR image in uploads
        });
      }

      res.json({ success: true, orderId: result.insertId });
    }
  );
});

// GET all orders (admin)
router.get("/", (req, res) => {
  db.query("SELECT * FROM orders ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// MARK AS PAID
router.put("/:id/pay", (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE orders SET paymentStatus='Paid', orderStatus='Confirmed' WHERE id=?",
    [id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ success: true });
    }
  );
});

module.exports = router;
