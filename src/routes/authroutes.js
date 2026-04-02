const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  // Handle login logic here
  res.json({ message: "Login successful" });
});

module.exports = router;
