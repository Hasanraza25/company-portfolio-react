import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection">
                    <Row>
                        <Col lg="3" md={6} sm={12} className="p-5 text-center">
                            <h2 className="footerName text-center">Follow Us </h2>
                            <div className="social-container">
                                <a className="facebook social" href="#">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <a href="#" className="youtube social">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                                <a href="#" className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                            </div>
                        </Col>
                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Address</h2>
                            <p className="footerDescription">
                                Off#91, Falak Corporate City Bolton Market, Karachi, Pakistan. <br></br>
                                <FontAwesomeIcon icon={faEnvelope} /> Email : Support@afa.com<br></br>
                                <FontAwesomeIcon icon={faPhone} /> Phone : 3411811<br></br>
                            </p>
                        </Col>
                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Information </h2>
                            <a className="footerLink" href="#">About Me </a> <br></br>
                            <a className="footerLink" href="#">Company Profile </a> <br></br>
                            <a className="footerLink" href="#">Contact Us  </a> <br></br>
                        </Col>
                        <Col lg="3" md={6} sm={12} className="p-5 text-justify">
                            <h2 className="footerName">Policy  </h2>
                            <Link exact to="/refund"  className="footerLink" href="#">Refund Policy  </Link> <br></br>
                            <Link exact to="/terms" className="footerLink" href="#">Terms And Condition  </Link> <br></br>
                            <Link exact to="/privacy" className="footerLink" href="#">Privacy Policy   </Link> <br></br>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightlink" href="#">© Copyright 2009-2024 by Al-Fateem Academy, All Rights Reserved</a>
                </Container>

            </Fragment>
        )
    }
}

export default Footer