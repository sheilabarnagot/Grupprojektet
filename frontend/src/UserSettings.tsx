import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UserSettings = () => {
  // Tillstånd för användaruppgifter
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setuserId] = useState("");

  useEffect(() => {
    // Hämta användaruppgifter som finns
    const Id = localStorage.getItem("items");
    if (Id) {
      setuserId(Id);
    }
    getUserData(Id);
  });

  const getUserData = async (Id) => {
    console.log(Id);
    try {
      const response = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: Id }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setEmail(data[0].email);
      console.log(data);
      setPassword(data[0].password);
      setUsername(data[0].username);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  console.log(username, password, email);

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    setEmail(event.currentTarget[0].value);
    try {
      const response = await fetch(`http://localhost:3000/editprofile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, userId }),
      });

      if (response.ok) {
        alert("Profilen har uppdaterats!");
      } else {
        const errorData = await response.json();
        console.error("Error saving user profile:", errorData.message);
      }
    } catch (error) {
      console.error("Error saving user profile:", error);
    }
  };

  return (
    <Form onSubmit={handleSaveChanges}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>{email && email}</Form.Label>
        <Form.Control type="email" placeholder="Enter new Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupUsername">
        <Form.Label>{username}</Form.Label>
        <Form.Control type="Username" placeholder="Enter new Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserSettings;
