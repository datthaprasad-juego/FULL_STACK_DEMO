let mysql = require("mysql2/promise");

const connection = async () => {
  try {
    const { DATABASE, DATABASE_HOST, DATABASE_USER, DATABASE_PASSWORD } =
      process.env;
    const con = await mysql.createConnection({
      host: DATABASE_HOST,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE,
    });
    console.log("DATABASE CONNECTED...");

    await con.connect();
    return con;
  } catch (error) {
    console.log("connection error", error);
    return;
  }
};

module.exports = connection;
