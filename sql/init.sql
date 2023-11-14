CREATE TABLE users (
userid SERIAL PRIMARY KEY,
first_name VARCHAR(50),
last_name VARCHAR(50),
username VARCHAR(50),
email VARCHAR(255),
password VARCHAR(255)
);

CREATE TABLE posts (
postid SERIAL PRIMARY KEY,
userid INTEGER REFERENCES users(userid),
title VARCHAR(255),
postcontent TEXT
);

CREATE TABLE comments (
commentid SERIAL PRIMARY KEY,
postid INTEGER REFERENCES posts(postid),
useride INTEGER REFERENCES users(userid),
commentcontent TEXT
);

CREATE TABLE UserComment (
UserCommentID SERIAL PRIMARY KEY,
userid INTEGER REFERENCES users(userid),
commentid INTEGER REFERENCES comments(commentid)
);

CREATE TABLE PostComment (
PostCommentID SERIAL PRIMARY KEY,
postid INTEGER REFERENCES posts(postid),
commentid INTEGER REFERENCES comments(commentid)
);
