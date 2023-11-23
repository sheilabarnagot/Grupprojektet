const query = {
  users: {
    text: 'select * from users;',
  },
  createforumposts: {
    text: `INSERT INTO posts (userid, title, postcontent, topic ) VALUES ($1, $2, $3, $4) RETURNING *;`,
  },
  createusercomment: {
    insertComment: `INSERT INTO comments (userid, postid, parent_commentid, commentcontent) VALUES ($1, $2, $3, $4 ) RETURNING *;`,
    insertUserComment: `INSERT INTO UserComment (userid, commentid) VALUES ($1, $2) RETURNING *;`,
    insertPostComment: `INSERT INTO PostComment (postid, commentid) VALUES ($1, $2) RETURNING *;`,
  },

  // 100% credit to chatgpt for this query
  commentoncomment: {
    text: `WITH RECURSIVE CommentThread AS (
      -- Anchor member: Select the root comment (CommentOnPost) and its direct children
      SELECT
        c.commentid,
        c.commentcontent,
        c.userid,
        c.parent_commentid,
        0 AS depth
      FROM
        comments c
      WHERE
        c.parent_commentid = $1 -- Root comment (CommentOnPost)

      UNION ALL

      -- Recursive member: Select the next level of comments
      SELECT
        c.commentid,
        c.commentcontent,
        c.userid,
        c.parent_commentid,
        ct.depth + 1 AS depth
      FROM
        comments c
      JOIN
        CommentThread ct ON c.parent_commentid = ct.commentid
    )
    -- Select all comments in the thread
    SELECT
      ct.commentid,
      ct.commentcontent,
      ct.userid,
      ct.parent_commentid,
      u.username,
      ct.depth
    FROM
      CommentThread ct
    JOIN
      users u ON ct.userid = u.userid
    ORDER BY
      ct.depth, ct.commentid;
    `,
  },

  allposts: {
    text: `select users.username, posts.title, posts.topic, posts.postcontent, posts.postid, posts.userid
     from posts JOIN users ON posts.userid = users.userid;`,
  },
  specifikpost: {
    text: `SELECT posts.postid, users.userid, posts.title, posts.postcontent, posts.topic, users.username,
    comments.commentid,users.userid, comments.commentcontent, comments.parent_commentid, UserComment.CommentID FROM posts
    LEFT JOIN users ON posts.userid = users.userid
    LEFT JOIN comments ON posts.postid = comments.postid
    LEFT JOIN UserComment ON users.userid = UserComment.userid
    AND comments.commentid = UserComment.CommentID
    WHERE posts.userid = $1 AND posts.postid = $2 AND comments.parent_commentid IS NULL;`,
  },

  // chatgpt
  specifikPostComment: {
    text: `WITH RECURSIVE PostComments AS (
      -- Anchor member: Select the comments directly on a specific post
      SELECT
        c.commentid,
        c.commentcontent,
        c.userid,
        c.parent_commentid,
        0 AS depth
      FROM
        comments c
      WHERE
        c.parent_commentid IS NULL -- Comments directly on posts
        AND c.postid = $1 -- Specify the postid you are interested in

      UNION ALL

      -- Recursive member: Select the next level of comments
      SELECT
        c.commentid,
        c.commentcontent,
        c.userid,
        c.parent_commentid,
        pc.depth + 1 AS depth
      FROM
        comments c
      JOIN
        PostComments pc ON c.parent_commentid = pc.commentid
    )
    -- Select all comments directly on the specified post
    SELECT
      pc.commentid,
      pc.commentcontent,
      pc.userid,
      pc.parent_commentid,
      u.username,
      pc.depth
    FROM
      PostComments pc
    JOIN
      users u ON pc.userid = u.userid
    WHERE
      pc.parent_commentid IS NULL -- Only select top-level comments
    ORDER BY
      pc.depth, pc.commentid;
    `,
  },

  post: {
    text: `SELECT posts.postcontent, posts.title FROM posts WHERE posts.postid = $1;`,
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
  delete: {
    deleteusercomment: {
      text: `DELETE FROM UserComment WHERE userid = $1;`,
    },
    deletepostcomment: {
      text: `DELETE FROM PostComment
      WHERE parent_commentid IN (SELECT commentid FROM comments WHERE userid = $1);`,
    },
    deletecommentstable: {
      text: `DELETE FROM comments`,
    },
    deleteuserpost: {
      text: `DELETE FROM posts WHERE userid = $1;`,
    },
    deleteuser: {
      text: `DELETE FROM users WHERE userid = $1;`,
    },
  },
};

module.exports = query;
