import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

class Analysis extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Techonology: "PHP", Projects: 100 },
        { Techonology: "MySqli", Projects: 90 },
        { Techonology: "Laravel", Projects: 95 },
        { Techonology: "React", Projects: 85 },
        { Techonology: "Opencart", Projects: 80 },
        { Techonology: "Vue Js", Projects: 70 },
        { Techonology: "Django", Projects: 60 },
        { Techonology: "JavaScript", Projects: 100 },
      ],
    };
  }
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>
          <Row>
            <Col style={{ height: "300px" }} lg={6} md={12} sm={12}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={this.state.data}>
                  <XAxis dataKey="Techonology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill="#051b35"></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDescription">
                Hi! I'm Ayaz Ahmed Mast. I'm a web developer with a serious love
                for teaching I am a founder of Al-Fateem Academy and a
                passionate Web Developer, Programmer & Instructor.<br></br>
                <br></br>I am working for the last 15 years and have created
                several successful websites running on the internet. I try to
                create a project-based course that helps you to learn
                professionally and make you fell as a complete developer.
                Al-Fateem Academy exists to help you succeed in life.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
