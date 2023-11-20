import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
  });

  const [id, setId] = useState();

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
        .post('http://localhost:3000/login', formData)
        .then(res => {
          setId(res.data.user.userid);
          return res;
        });

      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(id));
    console.log({ id });
    id && localStorage.setItem('userName', JSON.stringify(formData.userName));
    id && navigate('/');
  });

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items') || '');
  //   if (items) {
  //     setId(items);
  //   }
  // }, []);

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
