const connection = require("../connection");

const findAll = async (table, where) => {
  try {
    const con = await connection();
    const query = `SELECT * FROM ${table} WHERE ${where}`;
    return (await con.execute(query))[0];
  } catch (err) {
    console.log("findAll", err);
    return;
  }
};

const findOne = async (table, where) => {
  try {
    const con = await connection();
    const query = `SELECT * FROM ${table} WHERE ${where} LIMIT 1`;
    return (await con.execute(query))[0][0];
  } catch (err) {
    console.log("findOne", err);
    return;
  }
};
module.exports = { findAll, findOne };
