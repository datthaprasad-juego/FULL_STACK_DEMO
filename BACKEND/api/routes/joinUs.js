const bcrypt = require("bcrypt");

const { findOne, insertOne, updateOne } = require("../../firebase");
const global = require("../../global");
const {
  sendVerificationEmailForRegistration,
  generateAccessToken,
  generateOtp,
} = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { email, password, is_login } = req.body;

  //validation
  if (!email || !password) {
    return sendResponse(res, "INPUTS_MISSING", {});
  }
  const name = email.slice(0, email.indexOf("@"));

  // Find if user exist or not
  const user = await findOne("user", { email });
  if (is_login) {
    /* <----------- FOR LOGIN --------------> */
    if (
      user &&
      user.is_verified_user &&
      (await bcrypt.compare(password, user.password))
    ) {
      const accessToken = generateAccessToken(user.user_id);
      await updateOne("user", user.user_id, { access_token: accessToken });
      return sendResponse(res, "SUCCESS", {
        access_token: accessToken,
        name,
        points: user.points,
      });
    } else {
      return sendResponse(res, "USER_NOT_FOUND", {});
    }
  } else {
    /* <----------- FOR REGISTRATION --------------> */
    if (user && user.is_verified_user) {
      return sendResponse(res, "DUPLICATE_EMAIL", {});
    } else if (user && !user.is_verified_user) {
      const otp = generateOtp();
      //send email to verify
      if (await sendVerificationEmailForRegistration(email, otp)) {
        const response = await updateOne("user", user.user_id, {
          name,
          password: await bcrypt.hash(password, 10),
          otp,
        });
        return sendResponse(res, "SUCCESS", {
          ...response,
          verification_mail_sent: true,
        });
      } else {
        return sendResponse(res, "INVALID_EMAIL", {});
      }
    } else {
      const otp = generateOtp();
      //send email to verify
      if (await sendVerificationEmailForRegistration(email, otp)) {
        //create new user in db
        const userData = {
          name,
          email,
          password: await bcrypt.hash(password, 10),
          access_token: "NULL",
          is_verified_user: 0,
          status: global.USER_STATUS.REGISTERED,
          otp,
          created_at: new Date(),
        };

        const response = await insertOne("user", userData);
        return sendResponse(res, "SUCCESS", {
          ...response,
          verification_mail_sent: true,
        });
      } else {
        return sendResponse(res, "INVALID_EMAIL", {});
      }
    }
  }
};
