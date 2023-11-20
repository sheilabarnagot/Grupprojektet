import LoginForm from '../components/LoginForm';
import { Container, Row, Col } from 'react-bootstrap';
import './LoginStyled.css';

const LoginPage: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Login</h2>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
