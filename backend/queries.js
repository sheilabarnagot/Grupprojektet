const query = {
  users: {
    text: 'select _ from users;',
  },
  createforumposts: {
    text: `INSERT INTO posts (userid, title, postcontent, topic ) VALUES ($1, $2, $3, $4) RETURNING *;`,
  },

  // await client.query('BEGIN')
  // const queryText = 'INSERT INTO users(name) VALUES($1) RETURNING id'
  // const res = await client.query(queryText, ['brianc'])

  // const insertPhotoText = 'INSERT INTO photos(user_id, photo_url) VALUES ($1, $2)'
  // const insertPhotoValues = [res.rows[0].id, 's3.bucket.foo']
  // await client.query(insertPhotoText, insertPhotoValues)
  // await client.query('COMMIT')
  createusercomment: {
    insertComment: `INSERT INTO comments (useride, postid, commentcontent) VALUES ($1, $2, $3) RETURNING *;`,
    insertUserComment: `INSERT INTO UserComment (userid, commentid) VALUES ($1, $2) RETURNING *;`,
    insertPostComment: `INSERT INTO PostComment (postid, commentid) VALUES ($1, $2) RETURNING *;`,
  },
  allposts: {
    text: `select users.username, posts.title, posts.topic, posts.postcontent, posts.postid, posts.userid
     from posts JOIN users ON posts.userid = users.userid;`,
  },
  specifikpost: {
    text: `SELECT posts.postid, users.userid, posts.title, posts.postcontent, posts.topic, users.username, 
    comments.commentid,users.userid, comments.commentcontent, UserComment.CommentID FROM posts
    LEFT JOIN users ON posts.userid = users.userid
    LEFT JOIN comments ON posts.postid = comments.postid
    LEFT JOIN UserComment ON users.userid = UserComment.userid
    AND comments.commentid = UserComment.CommentID
    WHERE posts.userid = $1 AND posts.postid = $2;`,
  },
  usercomment: {
    text: `SELECT users.username, posts.postcontent, comments.commentcontent FROM users
    JOIN posts ON users.userid = posts.userid
    JOIN comments ON posts.postid = comments.postid
    JOIN UserComment ON users.userid = UserComment.userid
    AND comments.commentid = UserComment.CommentID
    WHERE posts.postid = $1
    AND users.userid = $2;`,
  },
};

module.exports = query;
