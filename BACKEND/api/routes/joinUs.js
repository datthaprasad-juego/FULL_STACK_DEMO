const { findOne, findAll } = require("../../mysql/interface");
module.exports = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({
      message: "Please fill all the fields",
    });
  }

  let where = `user_email = '${email}'`;
  const user = await findOne("users", where);
  /**
   * If user already exists and status = 1, return login success
   * If user already exists and status = 0, create user and return login success
   * If user does not exist, create user and return login success
   */
  if (user) {
    //TODO: check password
  }
  else{
    //TODO: send mail and send verification link
    //TODO: if mail sent create user with status = 0

  }

  const playerDetail = {
    name,
    points: 1000,
    accessToken: "test",
    verificationMailSent: false,
  };
  return res.send(playerDetail);
};
