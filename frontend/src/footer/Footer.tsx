import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./FooterStyled.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <p>
              <Link to="/samtycke">samtycke</Link>
              <Link to="/samtycke">Consent</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
