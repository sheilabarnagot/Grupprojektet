import { NavLink } from 'react-bootstrap';

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
  console.log(posts);
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-5xl mt-4">Latest Posts</h1>
        <div>
          {posts &&
            posts
              .slice(Math.max(posts.length - 9, 1))
              .reverse()
              .map((post: IndividualPost, i) => {
                const ingress =
                  post.postcontent &&
                  post.postcontent.split(' ').slice(0, 3).join(' ');
                console.log(post.postid);
                return (
                  <div key={post.postid}>
                    <NavLink href={`/posts/${post.userid}/${post.postid}`}>
                      <div className="flex items-center">
                        <p className="m-0 text-3xl pr-3">{post.title}</p>
                        <p>By: {post.username}</p>
                      </div>
                      <p className="underline mb-3">{post.topic}</p>
                      <p className="mb-3">{ingress}...</p>
                    </NavLink>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};
