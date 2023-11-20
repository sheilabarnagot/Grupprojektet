import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const CreateComment = () => {
  const postid = useLocation();

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
    console.log(e.target[0].value);
  };
  return (
    <div className="flex justify-center">
      <Form
        onSubmit={e => handleSubmit(e, Number(postid.pathname.split('/')[3]))}>
        <Form.Group
          className="mb-3 mt-10"
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