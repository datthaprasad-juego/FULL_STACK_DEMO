
const { isAuthenticatedUser } = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { access_token } = req.headers;
  const authenticatedUser = await isAuthenticatedUser(res, access_token);

  if (!authenticatedUser) return sendResponse(res, "FAILED", {});
  const profileData = {
    user_id: authenticatedUser.user_id,
    points: authenticatedUser.points,
    name: authenticatedUser.name,
    avatar: authenticatedUser.avatar,
  };

  return sendResponse(res, "SUCCESS", {
    profileData,
  });
};
