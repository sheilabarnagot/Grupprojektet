import { NavLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { CommentReply } from './comments/CommentReply';
import { useEffect, useState } from 'react';

const SpecifikUserPost = () => {
  const useLoaderDataFunc: any = useLoaderData();
  const [id, setId] = useState();

  const [comments, setComments] = useState<any>([]);

  const getPosts = async () => {
    const response = await fetch('http://localhost:3000/specifikPostComment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postid: useLoaderDataFunc[0].postid,
      }),
    });

    const result = await response.json();

    setComments(result);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items') || '');

    if (items) {
      setId(items);
    }
    getPosts();
  }, []);

  return (
    <>
      <div className="flex flex-col mt-36 h-screen items-center ">
        <h1>{useLoaderDataFunc && useLoaderDataFunc[0].title}</h1>
        <p className="underline mb-3">
          {useLoaderDataFunc && useLoaderDataFunc[0].topic}
        </p>
        <p className="mb-3">
          Author: {useLoaderDataFunc && useLoaderDataFunc[0].username}
        </p>
        <p className="mb-3">
          {useLoaderDataFunc && useLoaderDataFunc[0].postcontent}
        </p>
        <div className="border-bottom w-8/12"></div>
        <div className="w-full flex flex-col items-center">
          <div className="w-96">
            <div className="flex flex-col items-center">
              <h1 className="mt-4">Comments</h1>
              <NavLink
                style={{ color: 'orange' }}
                to={`/post/createpost/${useLoaderDataFunc[0].postid}`}>
                Comment this post
              </NavLink>
            </div>
            <div className="flex justify-center">
              <div className="border-bottom w-8/12 self"></div>
            </div>
            <div className="self-start">
              {comments &&
                comments.map((item: any, i: number) => {
                  return (
                    <div className="flex justify-center w-full" key={i}>
                      <div className="flex flex-col items-center w-full justify-center pt-10">
                        {item.commentcontent && (
                          <>
                            <div className="flex justify-center">
                              <p className="pr-10">{item.username + ':'}</p>
                              <p>{item.commentcontent}</p>
                            </div>
                            <div className="items-end"></div>
                            <CommentReply
                              commentContent={item.commentcontent}
                              postId={item.postid}
                              commentId={item.commentid}
                              userName={item.username}
                              id={id}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecifikUserPost;
