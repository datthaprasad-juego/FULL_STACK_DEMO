module.exports = (req, res) => {
  const { playersData } = require("../../global");
  res.send({
    activePlayer: playersData[Math.floor(Math.random() * playersData.length)],
    remainingCards: 4,
  });
};
