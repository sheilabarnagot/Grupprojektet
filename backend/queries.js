const query = {
  users: {
    text: "select _ from users;",
  },
  createforumposts: {
    text: `INSERT INTO posts (userid, title, postcontent, topic ) VALUES ($1, $2, $3, $4) RETURNING *;`,
  },
  allposts: {
    text: "select * from posts;",
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
