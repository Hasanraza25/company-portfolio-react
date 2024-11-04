import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ecommerceIcon from "../../assets/images/ecommerce.png";
import designIcon from "../../assets/images/design.png";
import webIcon from "../../assets/images/web.png";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

export class Services extends Component {
  constructor() {
    super();

    this.state = {
      myData: [],
    };
  }

  componentDidMount() {
    RestClient.GetRequest(AppUrl.Services)
      .then((result) => {
        this.setState({ myData: result });
      })
      .catch((error) => {
        this.setState({ myData: "????" });
      });
  }
  render() {
    const myList = this.state.myData;
    const myView = myList.map((myList) => {
      return (
        <Col lg={4} md={6} sm={12}>
          <div className="serviceCard text-center">
            <img
              className="ecommerceIcon"
              src={myList.service_logo}
              alt="Ecommerce Icon"
            />
            <h2 className="serviceName">{myList.service_name}</h2>
            <p className="serviceDescription">
             {myList.service_description}
            </p>
          </div>
        </Col>
      );
    });
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY SERVICES</h1>
          <div className="bottom"></div>
          <Row>
          {myView}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
