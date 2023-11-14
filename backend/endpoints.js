const router = require("express").Router();
const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  connectionString: "postgres://postgres:secret12345@database/postgres",
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
