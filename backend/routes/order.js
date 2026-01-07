const express = require("express");
const router = express.Router();
const db = require("../db");

/* PLACE ORDER (COD) */
router.post("/place", (req, res) => {
  const { user_id, total } = req.body;

  const sql =
    "INSERT INTO orders (user_id,total,payment_method) VALUES (?,?,?)";

  db.query(sql, [user_id, total, "COD"], (err) => {
    if (err) {
      return res.status(500).json({ message: "Order failed" });
    }
    res.json({ message: "Order placed successfully" });
  });
});

module.exports = router;
