const words = [
  "APPLE",
  "ABOVE",
  "ACUTE",
  "BREAD",
  "CHIEF",
  "CORNY",
  "HAPPY",
  "IDEAL",
  "COUNT",
  "MEDIA",
  "PILOT",
  "PRIME",
  "SERVE",
  "SCOPE",
  "SIGHT",
  "SLEEP",
  "STEAM",
  "TRACK",
  "WHILE",
  "YOUTH",
];

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

module.exports = { getRandomWord };
