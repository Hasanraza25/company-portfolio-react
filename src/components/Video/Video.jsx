import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';

class Video extends Component {

  constructor() {
    super();
    this.state = {
      show: false,
    }
  }

  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });

  render() {
    const videoCardStyle = {
      boxShadow: '0 13px 10px -5px',
      padding: '8rem 3rem',
      backgroundColor: '#051b35',
      margin: '20px auto',
      borderRadius: '5px',
      textAlign: 'center',
    };

    const iconStyle = {
      color: '#ffffff',
      fontSize: '40px',
      margin: '0 auto',
      cursor: 'pointer'
    };
    return (
      <Fragment>
        <Container>
          <h1 className="serviceMainTitle text-center">OUR VIDEOS</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <p className="serviceDescription text-justify">
                Hi! I'm Ayaz Ahmed Mast. I'm a web developer with a serious love for teaching I am a founder of Al-Fateem Academy and a passionate Web Developer, Programmer & Instructor.<br></br><br></br>
                I am working for the last 15 years and have created several successful websites running on the internet.
                I try to create a project-based course that helps you to learn professionally and make you fell as a
                complete developer. Al-Fateem Academy exists to help you succeed in life.
              </p>
            </Col>
            <Col lg={6} md={6} sm={12} className="videoCard" style={videoCardStyle}>
              <FontAwesomeIcon onClick={this.modalOpen} style={iconStyle} className="iconProject" icon={faVideoSlash} />
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Header closeButton>
            <Modal.Title  className='videoText'>Video Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default Video