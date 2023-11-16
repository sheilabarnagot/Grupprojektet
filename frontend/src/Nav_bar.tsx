import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
            <div className="flex justify-end w-1/12">
              <Navbar.Brand as={NavLink} to="/">
                CodeForum
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ minHeight: "75px", width: "100%" }}
                navbarScroll
              >
                <div className="flex w-full items-center justify-center">
                  <Nav.Link as={NavLink} to="/" href="#action1">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Actions" id="navbarScrollingDropdown">
                    <NavDropdown.Item as={NavLink} to="/createpost">
                      Create post
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      My created posts
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      My comments
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.ItemText>
                      <Button
                        onClick={toggleDarkMode}
                        variant="outline-primary"
                      >
                        Toggle dark mode
                      </Button>
                    </NavDropdown.ItemText>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                    User settings
                  </Nav.Link>
                </div>
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
