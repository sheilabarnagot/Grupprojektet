import { NavLink } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export const SpecifikUserPost = () => {
  const test: any = useLoaderData();

  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <h1>{test && test[0].title}</h1>
        <p className="underline mb-3">{test && test[0].topic}</p>
        <p className="mb-3">{test && test[0].username}</p>
        <p className="mb-3">{test && test[0].postcontent}</p>
        <div className="border-bottom w-8/12"></div>
        <div className="w-full flex flex-col items-center">
          <div className="w-96 ">
            <h1 className="text-center mt-4">Comments</h1>
            <div className="border-bottom w-8/12"></div>
            {test &&
              test.map((item: any, i: number) => {
                return <p key={i}>{item.commentcontent}</p>;
              })}
          </div>
        </div>
      </div>
      <NavLink to={`/post/createpost/${test[0].postid}`}>
        Comment this post
      </NavLink>
    </>
  );
};
