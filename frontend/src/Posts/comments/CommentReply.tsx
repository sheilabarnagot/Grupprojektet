import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

interface Props {
  userName: string;
  commentContent: string;
  postId: number;
  commentId: number;
  userId: number;
}

export const CommentReply = ({
  userName,
  commentContent,
  postId,
  commentId,
  userId,
}: Props) => {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState<any>();
  const [commentOnComment, setCommentOnComment] = useState<any>();
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    console.log(commentId);
    await getComment();
  };

  const postCommentAndGetComment = async (e: any) => {
    e.preventDefault();
    const option = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        postid: postId,
        userid: userId,
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

  console.log(commentOnComment);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        reply
      </Button>

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
                  <div>
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
          <Button
            style={{ backgroundColor: 'black' }}
            as="input"
            type="submit"
            value="Send"
          />
        </Form>
        <Modal.Footer style={{ backgroundColor: 'black' }}>
          <Button
            variant="secondary"
            style={{ backgroundColor: 'orange' }}
            onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            style={{ backgroundColor: 'orange' }}
            onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
