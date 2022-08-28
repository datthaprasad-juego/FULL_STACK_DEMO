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

const insertOne = async (table, data = {}) => {
  try {
    const con = await connection();
    const query = `INSERT INTO ${table}(${Object.keys(data).map(
      (key) => key
    )}) VALUES (${Object.values(data).map((value) => `'${value}'`)})`;

    const { insertId, affectedRows } = (await con.execute(query))[0];
    return { insertId, affectedRows };
  } catch (err) {
    console.log("insertOne", err);
    return;
  }
};

const updateOne = async (table, where, update) => {
  try {
    const con = await connection();
    const query = `UPDATE ${table} SET ${update} WHERE ${where}`;

    const { affectedRows } = (await con.execute(query))[0];
    return { affectedRows };
  } catch (err) {
    console.log("updateOne", err);
    return;
  }
};

module.exports = { findAll, findOne, insertOne, updateOne };
