import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

interface Props {
  isLoggedIn: boolean;
  setIsLoggedInContext: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav_bar = ({ isLoggedIn, setIsLoggedInContext }: Props) => {
  const [isLoggedInLocalStorage, setIsLoggedInLocalStorage] = useState(false);

  const [item, setItem] = useState<string | null>(null);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const navigateToLogin = () => {
    isLoggedIn || item ? navigate('/') : navigate('/login');
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedInContext(false);
    setIsLoggedInLocalStorage(false);
    setItem(null);
    navigate('/login');
  };

  const handleModal = () => {
    setModal(true);
  };

  const handleClose = () => setModal(false);

  const handleDelete = async () => {
    console.log({ isLoggedIn });
    const response = await fetch('http://localhost:3000/deleteaccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid: item }),
    });
    const result = await response.json();

    try {
      setIsLoggedInContext(false);
      console.log({ result });
    } catch (error) {
      console.error('Error deleting account:', error);
    } finally {
      handleLogout(), setModal(false);
    }
  };
  console.log({ isLoggedIn });

  useEffect(() => {
    const getitem = localStorage.getItem('items');
    if (getitem) setItem(getitem);
  });

  useEffect(() => {
    const getIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (getIsLoggedIn) setIsLoggedInLocalStorage(true);
  }, [isLoggedIn]);

  return (
    <>
      <div className="w-screen">
        <Modal show={modal} onHide={handleClose}>
          <Modal.Header
            style={{
              backgroundColor: '#1a202c',
            }}
            closeButton>
            <Modal.Title className="underline">Warning!</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              backgroundColor: '#1a202c',
            }}>
            This action will delete all your posts, comments and account.
            <div className="h-2 text-red-500"></div>
            <p className="text-red-500 font-bold text-center text-2xl">
              This action cannot be undone.
            </p>
            <div className="h-2"></div>
            <p className="text-right">Are you sure you want to continue?</p>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: '#1a202c',
            }}>
            <Button
              variant="secondary"
              className="bg-green-500"
              onClick={handleClose}>
              Go to safety
            </Button>
            <Button
              className="bg-orange-400"
              variant="warning"
              onClick={handleDelete}>
              Delete my account
            </Button>
          </Modal.Footer>
        </Modal>
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          expand="sm"
          id="navbar-navbar-Nav_bar"
          className="bg-body-tertiary w-100">
          <Container id="navbar-Nav_bar" fluid>
            <div className="flex ml-10 items-center justify-end w-1/12">
              <Navbar.Brand as={NavLink} to="/">
                CodeForum
              </Navbar.Brand>
              <img src="/icon.svg" width="35" />
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ minHeight: '75px', width: '100%' }}
                navbarScroll>
                <div className="flex w-full items-center justify-center">
                  <Nav.Link as={NavLink} to="/" href="#action1">
                    Home
                  </Nav.Link>
                  <NavDropdown title="Actions" id="navbarScrollingDropdown">
                    <NavDropdown.Item
                      disabled={!isLoggedInLocalStorage}
                      as={NavLink}
                      to="/createpost">
                      Create post
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      disabled={!isLoggedInLocalStorage}
                      href="#action3">
                      My created posts
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      disabled={!isLoggedInLocalStorage}
                      href="#action3">
                      My comments
                    </NavDropdown.Item>

                    {isLoggedInLocalStorage && (
                      <>
                        <NavDropdown.Divider />
                        <NavDropdown.ItemText>
                          <NavDropdown.Item
                            style={{
                              backgroundColor: 'red',
                              color: 'black',
                            }}
                            onClick={handleModal}>
                            Delete account
                          </NavDropdown.Item>
                        </NavDropdown.ItemText>
                      </>
                    )}
                  </NavDropdown>
                  <NavDropdown.ItemText onClick={() => navigateToLogin()}>
                    {isLoggedInLocalStorage ? 'User settings' : 'Login'}
                  </NavDropdown.ItemText>
                  {isLoggedInLocalStorage && (
                    <Button variant="putline-danger" onClick={handleLogout}>
                      Logout
                    </Button>
                  )}
                  {!isLoggedInLocalStorage && (
                    <Nav.Link to={'/register'} as={NavLink}>
                      Register
                    </Nav.Link>
                  )}
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
