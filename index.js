const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());

const authRoutes = require("./src/routes/authroutes");
const attendanceRoutes = require("./src/routes/attendanceRoutes");

app.use("/auth", authRoutes);
app.use("/attendance", attendanceRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
