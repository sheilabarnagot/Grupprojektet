import { GetAllPosts } from './GetAllPosts';
import { useEffect, useState } from 'react';

export const Layout = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch('http://localhost:3000/allposts');
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <GetAllPosts posts={posts} />
    </>
  );
};
