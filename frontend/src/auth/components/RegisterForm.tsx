import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    try {
      const response = await axios.post(
        'http://localhost:3000/register',
        formData
      );
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error registrering user:', error);
    } finally {
      navigate('/login');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your first name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="userName">
        <Form.Label>User Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Writte an user name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
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
      <Button variant="primary" type="submit" className="mt-4">
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
