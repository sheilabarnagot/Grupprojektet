import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ContextType, isUserLoggedIn } from '../../Context/IsLoggedInContext';

const LoginForm: React.FC = () => {
  const { isLoggedIn, setIsLoggedInContext } =
    isUserLoggedIn() satisfies ContextType;

  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });
  const [userIdFromDatabase, setUserIdFromDatabase] = useState();
  console.log({ isLoggedIn, setIsLoggedInContext });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submitted:', formData);
    try {
      const response = await axios
        .post('http://localhost:8000/login', formData)
        .then(res => {
          setUserIdFromDatabase(res.data.user.userid);
          return res;
        });

      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  useEffect(() => {
    userIdFromDatabase &&
      (localStorage.setItem('items', JSON.stringify(userIdFromDatabase)),
      localStorage.setItem('userName', JSON.stringify(formData.userName)),
      setIsLoggedInContext(true),
      navigate('/'),
      localStorage.setItem('isLoggedIn', JSON.stringify(true)));
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="userName">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your user name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter your password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="loginSubmit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
