import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../components/ResgisterForm";
import "./RegisterStyled.css";

const RegisterPage: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center mb-4">Register</h2>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
