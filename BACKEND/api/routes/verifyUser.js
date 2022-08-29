const global = require("../../global");
const { findOne, updateOne, insertMany } = require("../../mysql/interface");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { otp, email } = req.body;

  const where = `email = '${email}' AND status = ${global.USER_STATUS.REGISTERED} AND is_verified_user = 0 AND otp = ${otp}`;
  const user = await findOne("user", where);

  if (!user) return sendResponse(res, "FAILED", {});
  const result = await updateOne(
    "user",
    `user_id = ${user.user_id}`,
    `otp = 0, status = ${
      global.USER_STATUS.VERIFIED
    }, is_verified_user = 1, points = ${
      global.DEFAULT_POINTS
    }, game_cards = '${JSON.stringify(global.DEFAULT_CARDS)}'`
  );

  if (result) {
    let cards = [];
    global.DEFAULT_CARDS.forEach((data) => {
      cards.push({ user_id: user.user_id, master_card_id: data.rank });
    });
    await insertMany("cards", cards);
    return sendResponse(res, "SUCCESS", {});
  } else return sendResponse(res, "FAILED", {});
};
