const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/initiateGame", (req, res) => {
  for (let i = 0; i < 52000000; i++) {}
  const playersData = [
    {
      name: "King Kohli",
      centuries: 70,
      best: 183,
      rank: 1,
      six: 100,
      four: 78,
      trophie: 2,
    },
    {
      name: "AB de Villiers",
      centuries: 30,
      best: 183,
      rank: 2,
      six: 150,
      four: 70,
      trophie: 2,
    },
    {
      name: "Rohit Sharma",
      centuries: 43,
      best: 268,
      rank: 3,
      six: 158,
      four: 90,
      trophie: 14,
    },
    {
      name: "MS Dhoni",
      centuries: 30,
      best: 183,
      rank: 4,
      six: 150,
      four: 70,
      trophie: 12,
    },
  ];
  res.send({
    activePlayer: playersData[Math.floor(Math.random() * playersData.length)],
    remainingCards: 4,
  });
});

app.post("/betCard", (req, res) => {
  const { selectedAtrributeIndex, remainingCards } = req.body;
  const playersData = [
    {
      name: "King Kohli",
      centuries: 70,
      best: 183,
      rank: 1,
      six: 100,
      four: 78,
      trophie: 2,
    },
    {
      name: "AB de Villiers",
      centuries: 30,
      best: 183,
      rank: 2,
      six: 150,
      four: 70,
      trophie: 2,
    },
    {
      name: "Rohit Sharma",
      centuries: 43,
      best: 268,
      rank: 3,
      six: 158,
      four: 90,
      trophie: 14,
    },
    {
      name: "MS Dhoni",
      centuries: 30,
      best: 183,
      rank: 4,
      six: 150,
      four: 70,
      trophie: 12,
    },
  ];
  res.send({
    remainingCards: remainingCards - 1,
    activePlayer: playersData[Math.floor(Math.random() * playersData.length)],
  });
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
