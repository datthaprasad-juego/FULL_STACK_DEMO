const bcrypt = require("bcrypt");

const { findOne, insertOne, updateOne } = require("../../mysql/interface");
const global = require("../../global");
const {
  sendVerificationEmailForRegistration,
  generateAccessToken,
  generateOtp,
} = require("../helper/user.helper");
const { sendResponse } = require("../response");

module.exports = async (req, res) => {
  const { name, email, password, is_login } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({
      message: "Please fill all the fields",
    });
  }

  // Find if user exist or not
  let where = `email = '${email}'`;
  const user = await findOne("user", where);
  if (is_login) {
    /* <----------- FOR LOGIN --------------> */
    if (
      user &&
      user.is_verified_user &&
      (await bcrypt.compare(password, user.password))
    ) {
      const accessToken = generateAccessToken(user.user_id);
      await updateOne(
        "user",
        `user_id = ${user.user_id}`,
        `access_token = '${accessToken}'`
      );
      return sendResponse(res, "SUCCESS", {
        access_token: accessToken,
        name,
        points: user.points,
      });
    } else {
      return sendResponse(res, "FAILED", {});
    }
  } else {
    /* <----------- FOR REGISTRATION --------------> */
    if (user && user.is_verified_user) {
      return sendResponse(res, "DUPLICATE_EMAIL", {});
    } else if (user) {
      const otp = generateOtp();
      //send email to verify
      if (await sendVerificationEmailForRegistration(email, otp)) {
        const response = await updateOne(
          "user",
          `user_id = ${user.user_id}`,
          `name = '${name}',password = '${await bcrypt.hash(
            password,
            10
          )}',otp = ${otp}`
        );
        return sendResponse(res, "SUCCESS", response);
      } else {
        return sendResponse(res, "FAILED", {});
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
        };

        const response = await insertOne("user", userData);
        return sendResponse(res, "SUCCESS", response);
      } else {
        return sendResponse(res, "FAILED", {});
      }
    }
  }
};
