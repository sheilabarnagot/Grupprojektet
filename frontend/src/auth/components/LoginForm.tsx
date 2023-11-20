import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted:", formData);

    try {
      const response = await axios.post("/login", formData);
      console.log("Server response:", response.data);

      // Cambia la URL después del inicio de sesión exitoso
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

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
