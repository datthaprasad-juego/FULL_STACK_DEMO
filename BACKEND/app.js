const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./api");
const connection = require("./mysql/connection");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);
require("dotenv").config();

connection()
  .then((con) => {
    process.env = { ...process.env, SQL_MANAGER: con };
    app.listen(process.env.PORT || 5001, () => {
      console.log("Example app listening on port", process.env.PORT || 5000);
    });
  })
  .catch((error) => console.log("error in database connection", { error }));
