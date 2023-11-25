import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

interface Post {
  posts: {
    userid: number;
    postid: number;
    title: string;
    topic: string;
    username: string;
    postcontent: string;
  }[];
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
  const [getIsLoggedIn, setIsLoggedIn] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const getIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (getIsLoggedIn) setIsLoggedIn(getIsLoggedIn);
  }, []);

  const toggleShowA = () => setShowA(!showA);
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-4">Latest Posts</h1>
        <div>
          <Modal show={showA} onHide={toggleShowA}>
            <Modal.Header
              style={{
                backgroundColor: '#1a202c',
              }}
              closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body
              style={{
                backgroundColor: '#1a202c',
              }}>
              You have to be logged in to view this post
            </Modal.Body>
            <Modal.Footer
              style={{
                backgroundColor: '#1a202c',
              }}>
              <Button variant="secondary" onClick={toggleShowA}>
                Close
              </Button>
              <Button variant="primary" onClick={() => navigate('/login')}>
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
                  post.postcontent.split(' ').slice(0, 3).join(' ');

                return (
                  <div key={post.postid}>
                    {getIsLoggedIn ? (
                      <NavLink
                        to={
                          getIsLoggedIn &&
                          `/posts/${post.userid}/${post.postid}`
                        }>
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
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};
