const router = require("express").Router();

const initiateGame = require("./routes/initiateGame");
const betCard = require("./routes/betCard");
const getOpponentPlayer = require("./routes/getOpponentPlayer");
const joinUs = require("./routes/joinUs");
const verifyUser = require("./routes/verifyUser");
const profile = require("./routes/profile");
const editProfile = require("./routes/editProfile");

router.get("/", (req, res) => {
  res.send("Server works fine!...");
});

router.post("/initiateGame", initiateGame);

router.post("/betCard", betCard);

router.get("/getOpponentPlayer", getOpponentPlayer);

router.post("/joinus", joinUs);

router.post("/verifyUser", verifyUser);

router.get("/profile", profile);

router.post("/editprofile", editProfile);

module.exports = router;
