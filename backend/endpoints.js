const router = require('express').Router();
const { Client } = require('pg');
const dotenv = require('dotenv');
const query = require('./queries');
const cors = require('cors');

dotenv.config();

const client = new Client({
  connectionString: process.env.CONNECTION_STRING_AZURE,
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
});

router.post('/createforumpost', async (req, res) => {
  const response = await client.query(query.createforumposts, [
    req.body.userid,
    req.body.title,
    req.body.postcontent,
    req.body.topic,
  ]);
  res.send(response);
});

router.post('/post', async (req, res) => {
  const response = await client.query(query.post, [req.body.postid]);
  res.json(response);
});

router.post('/createusercomment', async (req, res) => {
  console.log(req.body.userid);
  try {
    await client.query('BEGIN');
    const insertComment = query.createusercomment.insertComment;
    const commentQuery = await client.query(insertComment, [
      req.body.userid,
      req.body.postid,
      req.body.parentcommentid || null,
      req.body.commentcontent,
    ]);
    const insertUserComment = query.createusercomment.insertUserComment;
    const UserCommentJunc = await client.query(insertUserComment, [
      req.body.userid,
      req.body.commentid,
    ]);
    const insertPostComment = query.createusercomment.insertPostComment;
    const PostCommentJunc = await client.query(insertPostComment, [
      req.body.postid,
      req.body.commentid,
    ]);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    if (e) res.status(500).send('Internal Server Error');
    throw e;
  } finally {
    res.status(200).json({ message: 'Comment created succesfully' });
  }
});

router.post('/commentoncomment', async (req, res) => {
  const response = await client.query(query.commentoncomment, [
    req.body.parentcommentid,
  ]);
  res.json(response.rows);
});

router.post('/createusercomment', async (req, res) => {
  try {
    await client.query('BEGIN');
    const insertComment = query.createusercomment.insertComment;
    await client.query(insertComment, [
      req.body.userid,
      req.body.postid,
      req.body.parentcommentid || null,
      req.body.commentcontent,
    ]);
    const insertUserComment = query.createusercomment.insertUserComment;
    await client.query(insertUserComment, [
      req.body.userid,
      req.body.commentid,
    ]);
    const insertPostComment = query.createusercomment.insertPostComment;
    await client.query(insertPostComment, [
      req.body.postid,
      req.body.commentid,
    ]);
    await client.query('COMMIT');
  } catch (e) {
    await client.query('ROLLBACK');
    if (e) res.status(500).send('Internal Server Error');
    throw e;
  } finally {
    res.status(200).json({ message: 'Comment created succesfully' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body;

    const query = {
      text: 'SELECT * FROM users WHERE username = $1 AND password = $2',
      values: [userName, password],
    };

    const response = await client.query(query);

    if (response.rows.length > 0) {
      res.json({
        message: 'Login succesful',
        user: response.rows[0],
        status: 200,
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('internal server Error');
  }
});

router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, userName, password, email } = req.body;

    const checkUserQuery = {
      text: 'SELECT * FROM users WHERE username = $1 OR email = $2',
      values: [userName, email],
    };

    const existingUser = await client.query(checkUserQuery);
    if (existingUser.rows.length > 0) {
      res.status(400).json({ message: 'username or email already exist' });
    } else {
      const createUserQuery = {
        text: 'INSERT INTO users (first_name, last_name, username, password, email) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        values: [firstName, lastName, userName, password, email],
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

router.get('/posts', cors(), async (req, res) => {
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

router.get('/usercomment', async (req, res) => {
  const response = await client.query(query.usercomment, [1, 2]);
  res.json(response.rows);
  console.log(response.rows);
});

module.exports = router;
