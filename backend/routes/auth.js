const express = require("express");
const router = express.Router();
const db = require("../db");

/* SIGNUP */
router.post("/signup", (req, res) => {
  const {
    name, email, password,
    street, city, state, pincode, country
  } = req.body;

  const sql = `
    INSERT INTO users
    (name,email,password,street,city,state,pincode,country)
    VALUES (?,?,?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [name, email, password, street, city, state, pincode, country],
    (err) => {
      if (err) {
        return res.status(400).json({ message: "Email already exists" });
      }
      res.json({ message: "Signup successful" });
    }
  );
});

/* LOGIN */
const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=? AND password=?";
  db.query(sql, [email, password], (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).json({ message: "Invalid login" });
    }

    res.json({
      id: result[0].id,
      name: result[0].name,
      email: result[0].email
    });
  });
};

router.login = login;
module.exports = router;
