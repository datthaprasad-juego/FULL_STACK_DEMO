const { findAll } = require("../../firebase");
const { isAuthenticatedUser } = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { access_token } = req.headers;
  const authenticatedUser = await isAuthenticatedUser(res, access_token);
  if (!authenticatedUser) return;

  const users = (
    await findAll("user", {
      is_verified_user: 1,
    })
  ).filter(({ user_id }) => user_id != authenticatedUser.user_id);

  if (!users.length)
    return sendResponse(res, "FAILED", { reason: "no_players" });
  const user = users[Math.floor(Math.random() * users.length)];

  if (user) {
    const playerDetail = {
      user_id: user.user_id,
      points: user.points,
      name: user.name,
    };

    sendResponse(res, "SUCCESS", {
      playerDetail,
    });
  } else {
    sendResponse(res, "FAILED", {});
  }
};
