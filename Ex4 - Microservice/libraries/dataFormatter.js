const categories = {
  general_knowledge: 9,
  entertainment_books: 10,
  entertainment_film: 11,
  entertainment_music: 12,
  entertainment_musicals_theatres: 13,
  entertainment_television: 14,
  entertainment_video_games: 15,
  entertainment_board_games: 16,
  science_nature: 17,
  science_computers: 18,
  science_mathematics: 19,
  mythology: 20,
  sports: 21,
  geography: 22,
  history: 23,
  politics: 24,
  art: 25,
  celebrities: 26,
  animals: 27,
};

const formatCategory = (category) => {
  if (isNaN(category)) {
    return categories[category] ? categories[category] : null;
  }
  return category;
};

module.exports = { formatCategory };
