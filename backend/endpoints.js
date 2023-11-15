const router = require("express").Router();
const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  connectionString: process.env.CONNECTION_STRING,
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

router.get("/hello", (req, res) => {
  res.send("Hello World!");
});

router.get("/users", async (req, res) => {
  const query = {
    text: "select * from users;",
  };

  const resa = await client.query(query);
  res.json(resa.rows);
  console.log(res.rows);
});

module.exports = router;
