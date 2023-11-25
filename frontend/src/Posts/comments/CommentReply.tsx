import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface Props {
  commentContent: string;
  postId: number;
  commentId: number;
  id: number | undefined;
  userName: string;
}

export const CommentReply = ({
  commentContent,
  postId,
  commentId,
  id,
  userName,
}: Props) => {
  const [show, setShow] = useState(false);
  const [commentOnComment, setCommentOnComment] = useState<any>();

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    await getComment();
  };

  const postCommentAndGetComment = async (e: any) => {
    e.preventDefault();
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postid: postId,
        userid: id,
        parentcommentid: commentId,
        commentcontent: e.currentTarget.elements[0].value,
      }),
    };
    const response = await fetch(
      'http://localhost:3000/createusercomment',
      option
    );
    const result = await response.json();
    getComment();
    return result;
  };

  async function getComment() {
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          parentcommentid: commentId,
        }),
      };
      const response = await fetch(
        'http://localhost:3000/commentoncomment',
        options
      );
      const result = await response.json();
      console.log(result);
      setCommentOnComment(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={handleShow}>reply to this comment</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: 'black' }} closeButton>
          <Modal.Title>
            <div className="flex flex-col">
              <p>{userName}</p>
              {commentContent}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: 'black',
          }}>
          {commentOnComment &&
            commentOnComment.map((comment: any) => {
              return (
                <div key={comment.commentid}>
                  <div className="flex ">
                    <p className="mr-2">{comment.username}:</p>
                    <p>{comment.commentcontent}</p>
                  </div>
                </div>
              );
            })}
        </Modal.Body>

        <Form onSubmit={postCommentAndGetComment}>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />

          <Modal.Footer style={{ backgroundColor: 'black' }}>
            <Button
              style={{ backgroundColor: 'black' }}
              as="input"
              type="submit"
              value="Send"
            />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
