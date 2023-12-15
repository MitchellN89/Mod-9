const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const triviaRoutes = require("./routes/triviaRoutes");
app.use("/trivia", triviaRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
