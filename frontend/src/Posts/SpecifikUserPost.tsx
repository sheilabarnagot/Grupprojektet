import { useLoaderData, useRevalidator } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export const SpecifikUserPost = () => {
  const test: any = useLoaderData();
  let revalidator = useRevalidator();
  const [comment, setComment] = useState<any>([]);

  const handleSubmit = async (e?: any, test?: number) => {
    e.preventDefault();
    const reseponse = await fetch('http://localhost:3000/createusercomment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentcontent: e.target[0].value,
        postid: test,
        userid: 1,
      }),
    });
    const data = await reseponse.json();
    console.log(data);
    setComment(e.target[0].value);
    console.log(e.target[0].value);
    window.location.reload();
  };

  useEffect(() => {
    console.log({ test, comment, revalidator });
    revalidator;
  }, [comment]);

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
          <Form onSubmit={e => handleSubmit(e, test[0].postid)}>
            <Form.Group
              className="mb-3 mt-10"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Reply to this post..</Form.Label>
              <Form.Control
                style={{ width: 500, height: 250 }}
                as="textarea"
                rows={3}
              />
              <Button className="mt-3" variant="primary" type="submit">
                Submit{' '}
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};
