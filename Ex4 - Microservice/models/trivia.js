const { default: axios } = require("axios");

const getQuestions = (amount = 10, category, difficulty, type) => {
  let queries = "";
  if (category) {
    queries += `&category=${category}`;
  }
  if (difficulty) {
    queries += `&difficulty=${difficulty}`;
  }
  if (type) {
    queries += `&type=${type}`;
  }
  return axios.get(`https://opentdb.com/api.php?amount=${amount}${queries}`);
};

module.exports = { getQuestions };
