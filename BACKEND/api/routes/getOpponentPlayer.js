const { findOne } = require("../../mysql/interface");
const { isAuthenticatedUser } = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { access_token } = req.headers;
  const authenticatedUser = await isAuthenticatedUser(res, access_token);
  if (!authenticatedUser) return;

  const user = await findOne(
    "user",
    `user_id != ${authenticatedUser.user_id} AND is_verified_user = 1 ORDER BY RAND()`
  );

  if (user) {
    const playerDetail = {
      user_id: user.user_id,
      points: user.points,
      name: user.name,
    };

    return sendResponse(res, "SUCCESS", {
      playerDetail,
    });
  } else {
    return sendResponse(res, "FAILED", {});
  }
};
