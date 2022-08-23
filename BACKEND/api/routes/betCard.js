module.exports = (req, res) => {
  const { selectedAttributeIndex, selectedAttributeValue, remainingCards } =
    req.body;
  const playersData = [
    {
      name: "King Kohli",
      rank: 1,
      best: 183,
      centuries: 70,
      six: 100,
      four: 78,
      trophie: 2,
    },
    {
      name: "AB de Villiers",
      rank: 2,
      best: 183,
      centuries: 30,
      six: 150,
      four: 70,
      trophie: 2,
    },
    {
      name: "Rohit Sharma",
      rank: 3,
      best: 268,
      centuries: 43,
      six: 158,
      four: 90,
      trophie: 14,
    },
    {
      name: "MS Dhoni",
      rank: 4,
      best: 183,
      centuries: 30,
      six: 150,
      four: 70,
      trophie: 12,
    },
  ];

  //get random opponent card
  const opponentCard =
    playersData[Math.floor(Math.random() * playersData.length)];
  const opponentSelectedAttribute =
    Object.keys(opponentCard)[selectedAttributeIndex];
  const opponentSelectedAttributeValue =
    opponentCard[opponentSelectedAttribute];

  let isGameWon = 0;
  if (remainingCards - 1 === 0) {
    isGameWon = 1;
  }

  for (let i = 0; i < 526000; i++) {}
  res.send({
    remainingCards: remainingCards - 1,
    activePlayer: playersData[Math.floor(Math.random() * playersData.length)],
    isGameWon,
    reward: playersData[Math.floor(Math.random() * playersData.length)],
    opponentCard: playersData[Math.floor(Math.random() * playersData.length)],
    resultPoints: Math.floor(Math.random() * 100),
  });
};
