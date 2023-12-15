const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

let dbConnect = require("./dbConnect");

const PORT = process.env.SERVER_PORT;

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send({ result: "Connected" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
