import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <Container className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
      </section>

      <section>
        <Container className="text-center text-light text-md-start p-2 bg-dark">
          <Row className="mt-3">
            <Col md="3" lg="4" xl="3" className="mx-auto mb-4 ">
              <h6 className="text-uppercase fw-bold mb-4">Arctic Books </h6>
              <p>
                Our company specializes in providing books written by famous
                authors at affordable prices. We offer a wide selection of books
                and are committed to being your go-to source for inexpensive
                reading materials.
              </p>
            </Col>

            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>Harry Potter</p>
              <p>Ali Baba</p>
              <p>Masud Rana </p>
              <p>Robinhood</p>
            </Col>

            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>Pricing</p>
              <p>Settings</p>
              <p>Orders</p>
              <p>Help</p>
            </Col>

            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>Helsinki Finland</p>
              <p>info@example.com</p>
              <p>+358 234 567 88</p>
              <p>+358 234 567 89</p>
            </Col>
          </Row>
        </Container>
      </section>
    </Container>
  );
}
