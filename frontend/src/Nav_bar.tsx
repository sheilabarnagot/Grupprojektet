import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export const Nav_bar = () => {
  const [darkMode, setDarkMode] = useState("dark");

  const toggleDarkMode = () => {
    darkMode === "dark" ? setDarkMode("light") : setDarkMode("dark");
  };

  return (
    <>
      <div className="w-screen">
        <Navbar
          bg={darkMode}
          data-bs-theme={darkMode}
          expand="sm"
          id="navbar-navbar-Nav_bar"
          className="bg-body-tertiary w-100"
        >
          <Container id="navbar-Nav_bar" fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Settings" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">User</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Post</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    <Button onClick={toggleDarkMode} variant="outline-primary">
                      Toggle dark mode
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
