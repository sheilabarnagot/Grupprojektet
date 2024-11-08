import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

interface Post {
  posts: IndividualPost[];
}

interface IndividualPost {
  userid: number;
  postid: number;
  title: string;
  topic: string;
  postcontent: string;
  username: string;
}

export const GetAllPosts = ({ posts }: Post) => {
  const [showA, setShowA] = useState(false);
  const [getIsLoggedIn, setIsLoggedIn] = useState("");
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus) setIsLoggedIn(loggedInStatus);

    const savedLikes = JSON.parse(localStorage.getItem("likes") || "{}");
    setLikes(savedLikes);
  }, []);

  const toggleShowA = () => setShowA(!showA);

  const handleLike = useCallback(
    (postid: number) => {
      const updatedLikes = { ...likes, [postid]: (likes[postid] || 0) + 1 };
      setLikes(updatedLikes);
      localStorage.setItem("likes", JSON.stringify(updatedLikes));
    },
    [likes]
  );

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-4">Welcome to Our Community!</h1>
        <p className="text-xl mb-4">
          Join us and share your thoughts and ideas!
        </p>

        <h1 className="text-5xl mt-4">Latest Posts</h1>
        <div>
          <Modal show={showA} onHide={toggleShowA}>
            <Modal.Header style={{ backgroundColor: "#1a202c" }} closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#1a202c" }}>
              You have to be logged in to view this post
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#1a202c" }}>
              <Button variant="secondary" onClick={toggleShowA}>
                Close
              </Button>
              <Button variant="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>

          {posts &&
            posts
              .slice(Math.max(posts.length - 9, 1))
              .reverse()
              .map((post: IndividualPost) => {
                const ingress =
                  post.postcontent &&
                  post.postcontent.split(" ").slice(0, 3).join(" ");

                return (
                  <div key={post.postid}>
                    {getIsLoggedIn ? (
                      <NavLink to={`/posts/${post.userid}/${post.postid}`}>
                        <div className="flex items-center">
                          <p className="m-0 text-3xl pr-3">{post.title}</p>
                          <p>By: {post.username}</p>
                        </div>
                        <p className="underline mb-3">{post.topic}</p>
                        <p className="mb-3">{ingress}...</p>
                      </NavLink>
                    ) : (
                      <div onClick={toggleShowA}>
                        <div className="flex items-center">
                          <p className="m-0 text-3xl pr-3">{post.title}</p>
                          <p>By: {post.username}</p>
                        </div>
                        <p className="underline mb-3">{post.topic}</p>
                        <p className="mb-3">{ingress}...</p>
                      </div>
                    )}
                    <div className="flex items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (getIsLoggedIn) {
                            handleLike(post.postid);
                          } else {
                            toggleShowA();
                          }
                        }}
                        style={{
                          backgroundColor: "#007bff",
                          color: "white",
                          border: "none",
                          padding: "10px 15px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                      >
                        Like {likes[post.postid] || 0}
                      </button>
                    </div>
                    <hr
                      style={{ border: "1px solid #ccc", margin: "10px 0" }}
                    />{" "}
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};
