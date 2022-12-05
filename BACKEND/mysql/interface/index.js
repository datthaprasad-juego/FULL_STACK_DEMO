const findAll = async (table, where) => {
  try {
    const query = `SELECT * FROM ${table} WHERE ${where}`;

    return (await process.env.SQL_MANAGER.execute(query))[0];
  } catch (err) {
    console.log("findAll", err);
    return;
  }
};

const findOne = async (table, where) => {
  try {
    const query = `SELECT * FROM ${table} WHERE ${where} LIMIT 1`;

    return (await process.env.SQL_MANAGER.execute(query))[0][0];
  } catch (err) {
    console.log("findOne", err);
    return;
  }
};

const insertOne = async (table, data = {}) => {
  try {
    const query = `INSERT INTO ${table}(${Object.keys(data).map(
      (key) => key
    )}) VALUES (${Object.values(data).map((value) => `'${value}'`)})`;

    const { insertId, affectedRows } = (
      await process.env.SQL_MANAGER.execute(query)
    )[0];

    return { insertId, affectedRows };
  } catch (err) {
    console.log("insertOne", err);
    return;
  }
};

const insertMany = async (table, datas = []) => {
  try {
    const query = `INSERT INTO ${table}(${Object.keys(datas[0]).map(
      (key) => key
    )}) VALUES ${datas.map(
      (data) => `(${Object.values(data).map((value) => `'${value}'`)})`
    )}`;

    const { insertId, affectedRows } = (
      await process.env.SQL_MANAGER.execute(query)
    )[0];

    return { insertId, affectedRows };
  } catch (err) {
    console.log("insertOne", err);
    return;
  }
};

const updateOne = async (table, where, update) => {
  try {
    const query = `UPDATE ${table} SET ${update} WHERE ${where}`;

    const { affectedRows } = (await process.env.SQL_MANAGER.execute(query))[0];

    return { affectedRows };
  } catch (err) {
    console.log("updateOne", err);
    return;
  }
};

module.exports = { findAll, findOne, insertOne, updateOne, insertMany };
