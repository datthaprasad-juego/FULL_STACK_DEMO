const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./api");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);
require("dotenv").config();

app.listen(process.env.PORT || 5001, () => {
  console.log("Example app listening on port", process.env.PORT || 5000);
});
