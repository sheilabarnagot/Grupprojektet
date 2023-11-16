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

router.post('/login', async (req, res) => {
  try {
    const { username, pasword } = req.body;

    const query = {
      text: 'SELECT * FROM users WHERE username = $1 AND password = $2',
      values: [username, password],
    };

    const response = await client.query(query);

    if (response.rows.length > 0) {
      res.json({ message: 'Login succesful', user: response.rows[0] });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('internal server Error');
  }
});

router.post('/resgiter', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const checkUserQuery = {
      text: 'SELECT * FROM users WHERE username = $1 OR email = $2',
      values: [username, email],
    };

    const existingUser = await client.query(checkUserQuery);
    if (existingUser.rows.length > 0) {
      res.status(400).json({ message: 'username or email already exist' });
    } else {
      const createUserQuery = {
        text: 'INSERT INTE users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
        values: [username, password, email],
      };

      const newUser = await client.query(createUserQuery);

      res.json({
        message: 'User registered succesfully',
        user: newUser.rows[0],
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/posts', async (req, res) => {
  const response = await client.query(query.posts);
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
