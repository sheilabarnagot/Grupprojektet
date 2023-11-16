const router = require('express').Router();
const { Client } = require('pg');
const dotenv = require('dotenv');
const query = require('./queries');

dotenv.config();

const client = new Client({
  connectionString: process.env.CONNECTION_STRING_LOCAL,
  port: 5433,
});

client.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

router.get('/hello', (req, res) => {
  res.send('Hello World!');
});

router.get('/users', async (req, res) => {
  const response = await client.query(query.users);
  res.json(response.rows);
  console.log(response.rows);
});

router.post('/createforumpost', async (req, res) => {
  const response = await client.query(query.createforumposts, [
    1,
    req.body.title,
    req.body.postcontent,
    req.body.topic,
  ]);

  res.send(response);
});

router.get('/allposts', async (req, res) => {
  const response = await client.query(query.allposts);
  res.json(response.rows);
  console.log(response.rows);
});

router.post('/specifikpost', async (req, res) => {
  const response = await client.query(query.specifikpost, [
    req.body.userid,
    req.body.postid,
  ]);

  res.json(response.rows);
});

router.post('/usercomment', async (req, res) => {
  const response = await client.query(query.usercomment, [
    req.body.userid,
    req.body.postid,
  ]);
  res.json(response.rows);
  console.log(response.rows);
});

module.exports = router;
