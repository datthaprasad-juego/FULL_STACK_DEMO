const global = require("../../global");
const { findOne, updateOne, insertMany } = require("../../firebase");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  try {
    const { otp, email } = req.body;

    const user = await findOne("user", {
      email,
      status: global.USER_STATUS.REGISTERED,
      is_verified_user: 0,
      otp,
    });

    if (!user) return sendResponse(res, "FAILED", {});
    await updateOne("user", user.user_id, {
      otp: 0,
      status: global.USER_STATUS.VERIFIED,
      is_verified_user: 1,
      points: global.DEFAULT_POINTS,
      game_cards: global.DEFAULT_CARDS,
    });

    let cards = [];
    global.DEFAULT_CARDS.forEach((data) => {
      cards.push({
        user_id: user.user_id,
        master_card_id: data.rank,
        status: 1,
        created_at: new Date(),
      });
    });
    await insertMany("card", cards);
    return sendResponse(res, "SUCCESS", {});
  } catch (error) {
    return sendResponse(res, "FAILED", { error });
  }
};
