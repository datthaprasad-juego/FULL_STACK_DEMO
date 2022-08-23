const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./api");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
