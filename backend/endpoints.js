const router = require("express").Router();
const { Client } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const client = new Client({
  connectionString: process.env.CONNECTION_STRING_LOCAL,
  port: 5433,
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

  const response = await client.query(query);
  res.json(response.rows);
  console.log(response.rows);
});

// post & get forum post(s)

router.post("/createforumpost", async (req, res) => {
  const query = {
    text: `INSERT INTO posts (userid, title, postcontent, topic ) VALUES ($1, $2, $3, $4) RETURNING *;`,
    values: [1, req.body.title, req.body.postcontent, req.body.topic],
  };
  const response = await client.query(query);
  res.send(response);
});

router.get("/posts", async (req, res) => {
  const query = {
    text: "select * from posts;",
  };

  const response = await client.query(query);
  res.json(response.rows);
  console.log(response.rows);
});

router.get("/usercomment", async (req, res) => {
  const query = {
    text: `SELECT users.username, posts.postcontent, comments.commentcontent FROM users
    JOIN posts ON users.userid = posts.userid
    JOIN comments ON posts.postid = comments.postid
    JOIN UserComment ON users.userid = UserComment.userid
    AND comments.commentid = UserComment.CommentID
    WHERE posts.postid = $1
    AND users.userid = $2;`,
    values: [1, 1],
  };

  const response = await client.query(query);
  res.json(response.rows);
  console.log(response.rows);
});

module.exports = router;
