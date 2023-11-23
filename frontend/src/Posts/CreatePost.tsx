import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
// yest
export const CreatePost = () => {
  const [isSent, setIsSent] = useState(false);
  const [validation, setValidation] = useState(false);
  const [id, setId] = useState();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userid: id,
        title: (e.currentTarget.elements.namedItem('title') as HTMLInputElement)
          .value,
        topic: (
          e.currentTarget.elements.namedItem('topic') as HTMLSelectElement
        ).value,
        postcontent: (
          e.currentTarget.elements.namedItem('postcontent') as HTMLInputElement
        ).value,
      }),
    };

    e.preventDefault();

    try {
      const response = await fetch(
        'http://172.160.242.104:8000/createforumpost',
        option
      );
      const result = await response.json();
      result.rowCount === 1 ? setIsSent(!isSent) : setIsSent(false);
      console.log(result);
    } catch (error) {
      console.log('error');
    }
  };

  const handleTopicChange = (e: React.FormEvent<HTMLSelectElement>) => {
    e.currentTarget.value !== 'Topic'
      ? setValidation(true)
      : setValidation(false);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items') || '');
    if (items) {
      setId(items);
    }
    console.log(items);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-16">Create Post</h1>
        {isSent && <p>success</p>}
        <Form onSubmit={handleSubmit} className="w-50">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" placeholder="" />
          </Form.Group>
          <Form.Select
            onChange={handleTopicChange}
            name="topic"
            aria-label="Default select example">
            <option>Topic</option>
            <option value="programming">Programming</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Computers">Computers</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control
              name="postcontent"
              style={{ height: '500px' }}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <div className="flex justify-center">
            <Button
              style={{ width: 400 }}
              as="input"
              variant={validation ? 'primary' : 'secondary'}
              type="submit"
              value="Submit"
              // disabled={isSent || !validation}
            />
            <input type="submit" value="YOO" />
          </div>
        </Form>
      </div>
    </>
  );
};
