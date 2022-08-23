const router = require("express").Router();

const initiateGame = require("./routes/initiateGame");
const betCard = require("./routes/betCard");
const getOpponentPlayer = require("./routes/getOpponentPlayer");
const joinUs = require("./routes/joinUs");

router.get("/", (req, res) => {
  res.send("Server works fine!...");
});

router.get("/initiateGame", initiateGame);

router.post("/betCard", betCard);

router.post("/getOpponentPlayer", getOpponentPlayer);

router.post("/joinus", joinUs);

module.exports = router;
