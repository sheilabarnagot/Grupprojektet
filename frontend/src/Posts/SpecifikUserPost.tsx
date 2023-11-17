import { NavLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { CommentReply } from './comments/CommentReply';

export const SpecifikUserPost = () => {
  const test: any = useLoaderData();

  console.log(test);

  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <h1>{test && test[0].title}</h1>
        <p className="underline mb-3">{test && test[0].topic}</p>
        <p className="mb-3">{test && test[0].username}</p>
        <p className="mb-3">{test && test[0].postcontent}</p>
        <div className="border-bottom w-8/12"></div>
        <div className="w-full flex flex-col items-center">
          <div className="w-96">
            <h1 className="text-center mt-4">Comments</h1>
            <div className="flex justify-center">
              <div className="border-bottom w-8/12 self"></div>
            </div>
            <div className="self-start">
              {test &&
                test.map((item: any, i: number) => {
                  return (
                    <div className="flex justify-center w-full" key={i}>
                      <div className="flex flex-col items-center w-full justify-center pt-10">
                        <div className="flex justify-center">
                          <p className="pr-10">{item.username}:</p>
                          <p>{item.commentcontent}</p>
                        </div>
                        <div className="items-end"></div>
                        <CommentReply
                          userName={item.username}
                          commentContent={item.commentcontent}
                          postId={item.postid}
                          commentId={item.commentid}
                          userId={item.userid}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <NavLink to={`/post/createpost/${test[0].postid}`}>
        Comment this post
      </NavLink>
    </>
  );
};
