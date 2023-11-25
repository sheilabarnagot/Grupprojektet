import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

interface PostContent {
  title: string;
  postcontent: string;
}

export const CreateComment = () => {
  const postid = useLocation();
  const [id, setId] = useState();
  const [result, setResult] = useState<PostContent[]>();
  const navigate = useNavigate();
  const handleSubmit = async (e?: any, test?: number) => {
    e.preventDefault();
    const reseponse = await fetch('http://localhost:8000/createusercomment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        commentcontent: e.target[0].value,
        postid: test,
        userid: id,
      }),
    });
    await reseponse.json();
    navigate(-1);
  };

  const getPost = async () => {
    await fetch('http://localhost:8000/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        postid: postid.pathname.split('/')[3],
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.rows);
        setResult(data.rows);
      });
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items') || '');
    if (items) {
      setId(items);
    }
  }, []);
  useEffect(() => {
    getPost();
    console.log(1);
  }, [id]);

  console.log(result && result);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {result &&
        result.map((item: any, i: number) => {
          return (
            <div key={i}>
              <h1 className="text-center mt-4">{item.title}</h1>
              <div className="flex items-center justify-center w-full">
                <p className="w-[30rem]">{item.postcontent}</p>
              </div>
            </div>
          );
        })}
      <Form
        onSubmit={e => handleSubmit(e, Number(postid.pathname.split('/')[3]))}>
        <Form.Group
          className="mb-3 mt-2"
          controlId="exampleForm.ControlTextarea1">
          <Form.Label>Reply to this post..</Form.Label>
          <Form.Control
            style={{ width: 500, height: 250 }}
            as="textarea"
            rows={3}
          />
          <div className="mt-3 flex justify-center">
            <Button variant="primary" type="submit">
              Submit{' '}
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};
