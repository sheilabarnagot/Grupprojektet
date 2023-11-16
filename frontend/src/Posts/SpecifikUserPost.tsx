import { useLoaderData } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

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
          <div className="w-96 ">
            <h1 className="text-center mt-4">Comments</h1>
            <p>
              <span className="text-orange-400">Username:</span> Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ducimus fuga
              similique mollitia labore laudantium, ullam exercitationem eum.
              Sed laudantium voluptas eum numquam odit officiis esse.
            </p>

            <div className="border-bottom w-8/12"></div>
          </div>
          <Form.Group
            className="mb-3 mt-10"
            controlId="exampleForm.ControlTextarea1">
            <Form.Label>Reply to this post..</Form.Label>
            <Form.Control
              style={{ width: 500, height: 250 }}
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </div>
      </div>
    </>
  );
};
