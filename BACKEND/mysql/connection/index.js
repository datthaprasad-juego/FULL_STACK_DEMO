let mysql = require("mysql2/promise");

const connection = async () => {
  try {
    const con = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "age_of_gods",
    });

    await con.connect();
    return con;
  } catch (error) {
    console.log("connection error", error);
    return;
  }
};

module.exports = connection;
