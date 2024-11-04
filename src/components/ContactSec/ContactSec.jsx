import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
class ContactSec extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Quick Connect</h1>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Enter Your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter Your Message"
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceName">Discuss Now</h1>

              <p className="serviceDescription">
                Off#91, Falak Corporate City, Bolton Market, Karachi.<br></br>
                <FontAwesomeIcon icon={faEnvelope} /> Email : support@afa.com
                <br></br>
                <FontAwesomeIcon icon={faPhone} /> Phone : 322 3411811<br></br>
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ContactSec;
