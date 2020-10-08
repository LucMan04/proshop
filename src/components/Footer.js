import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; ProShop by{" "}
            <a href="https://github.com/lukasweidich/proshop">
              <i className="fab fa-github"></i> lukasweidich
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
