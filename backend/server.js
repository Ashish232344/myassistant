const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");

const app = express();

app.use(cors());
app.use(express.json());

/* ✅ TEST ROUTE */
app.get("/", (req, res) => {
  res.send("🌿 Mero Ropai Backend is Running Successfully");
});

app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes);

/* LOGIN */
app.post("/login", require("./routes/auth").login);

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
