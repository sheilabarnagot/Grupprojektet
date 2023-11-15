import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const CreatePost = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: e.target[0].value,
        topic: e.target[1].value,
        content: e.target[2].value,
      }),
    });
    const result = await response.json();

    console.log(result);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-16">Create Post</h1>
        <Form onSubmit={handleSubmit} className="w-50">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="tesxt" placeholder="" />
          </Form.Group>
          <Form.Select aria-label="Default select example">
            <option>Topic</option>
            <option value="programming">Programming</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Computers">Computers</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control style={{ height: "500px" }} as="textarea" rows={3} />
          </Form.Group>
          <div className="flex justify-center">
            <Button
              style={{ width: 400 }}
              as="input"
              type="submit"
              value="Submit"
            />
          </div>
        </Form>
      </div>
    </>
  );
};
