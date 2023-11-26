import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UserSettings = () => {
  // Tillstånd för användaruppgifter
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [userId, setuserId] = useState('');

  useEffect(() => {
    // Hämta användaruppgifter som finns
    const Id = localStorage.getItem('items');
    if (Id) {
      setuserId(Id);
    }
    getUserData(Id);
  });

  const getUserData = async (Id: any) => {
    try {
      const response = await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: Id }),
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setEmail(data[0].email);
      setUsername(data[0].username);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleSaveChanges = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/editprofile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: event.nativeEvent.srcElement[0].value,
          username: event.nativeEvent.srcElement[1].value,
          password: event.nativeEvent.srcElement[2].value,
          userId,
        }),
      });
      if (response.ok) {
        alert('Profilen har uppdaterats!');
        const result = await response.json();
        // console.log(result.user.userid);
        setuserId(result.user.userid);
      } else {
        const errorData = await response.json();
        console.error('Error saving user profile:', errorData.message);
      }
    } catch (error) {
      console.error('Error saving user profile:', error);
    }
  };

  useEffect(() => {
    console.log({ userId });
  }, [userId]);

  return (
    <div className="flex justify-center h-screen">
      <Form onSubmit={event => handleSaveChanges(event)}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>
            <span className="text-white">{email && email}</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Enter new Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupUsername">
          <Form.Label>
            <span className="text-white">{username}</span>
          </Form.Label>
          <Form.Control type="Username" placeholder="Enter new Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>
            <span className="text-white">New Password</span>
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" as="input" type="submit" value="Submit" />
      </Form>
    </div>
  );
};

export default UserSettings;
