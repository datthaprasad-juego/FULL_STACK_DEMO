const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const { sendResponse } = require("../response");
const { findOne } = require("../../mysql/interface");

module.exports.sendVerificationEmailForRegistration = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVER_HOST_NAME,
      auth: {
        user: process.env.SMTP_MAIL_FROM_MAIL_USER,
        pass: process.env.SMTP_MAIL_FROM_MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_MAIL_FROM_MAIL_ID,
      to: email,
      subject: "VERIFICATION",
      html: `<h3> Hey dude have u registered for cricket world </h3><a href="${process.env.API_ENDPOINT}/verifyUser?otp=${otp}">Click here to verify</a>`,
    };

    let result = await transporter.sendMail(mailOptions);
    return true;
  } catch (err) {
    console.log("sendVerificationEmailForRegistration => ", err);
    return;
  }
};

module.exports.generateOtp = () => {
  const length = 6,
    otpCharacters = "0123456789";
  let otp = "";

  for (let i = 0; i < length; i++) {
    otp += otpCharacters[Math.floor(Math.random() * otpCharacters.length)];
  }

  return otp;
};
module.exports.generateAccessToken = (userId) => {
  return jwt.sign(
    { user_id: userId, timestamp: Date.now() },
    process.env.JWT_SECRET
  );
};
module.exports.decodeAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log(
      "<-----------------------------DECODE JWT ERROR----------------------------->"
    );
    return;
  }
};

module.exports.isAuthenticatedUser = async (res, access_token) => {
  const decodedData = this.decodeAccessToken(access_token);
  if (!decodedData || !decodedData.user_id) {
    sendResponse(res, "AUTH_ERROR", {});
    return 0;
  }

  const { user_id } = decodedData;

  const user = await findOne(
    "user",
    `user_id = ${user_id} AND access_token = '${access_token}'`
  );
  if (!user) {
    sendResponse(res, "AUTH_ERROR", {});
    return 0;
  }

  return user;
};
