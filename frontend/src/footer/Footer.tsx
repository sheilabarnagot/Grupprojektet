import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './FooterStyled.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-gray-300 p-3 mt-20">
      <Container>
        <Row>
          <Col className="text-center">
            <p>
              <Link to="/gdpr" className="text-blue-500 hover:underline mr-4">
                Integritet och cookies
              </Link>
              {/* <Link to="/samtycke" className="text-blue-500 hover:underline">
                Consent
              </Link> */}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
