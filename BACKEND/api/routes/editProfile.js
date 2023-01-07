const { updateOne, findOneById } = require("../../firebase");
const { isAuthenticatedUser } = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { access_token } = req.headers;
  const authenticatedUser = await isAuthenticatedUser(res, access_token);

  if (!authenticatedUser) return sendResponse(res, "FAILED", {});
  const storedData = await findOneById("user", authenticatedUser.user_id);
  await updateOne("user", storedData.user_id, { avatar: req.body.avatar });

  return sendResponse(res, "SUCCESS", {});
};
