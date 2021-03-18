import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            {" "}
            <span className="footerStayAtBottom">Copyright &copy</span>{" "}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
