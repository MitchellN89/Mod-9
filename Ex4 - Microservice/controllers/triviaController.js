const Models = require("../models");
const { DataFormatter } = require("../libraries");

const getQuestions = async (req, res) => {
  const amount = req.params.amount || req.query.amount || null;
  const category = DataFormatter.formatCategory(
    req.params.category || req.query.category || null
  );
  const difficulty = req.params.difficulty || req.query.difficulty || null;
  const type = req.params.type || req.query.type || null;

  try {
    const response = await Models.Trivia.getQuestions(
      amount,
      category,
      difficulty,
      type
    );
    res.send(response.data);
  } catch (err) {
    console.log("Too many API calls, please wait");
    res.send({ result: "Please wait longer before making another call" });
  }
};

module.exports = { getQuestions };
