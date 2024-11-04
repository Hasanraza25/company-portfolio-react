import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import AppUrl from "../../RestAPI/AppUrl";
import RestClient from "../../RestAPI/RestClient";

class TopBanner extends Component {
  constructor(){
    super()
    this.state = {
      title: '...',
      substitle: '...'
    }
  }

  componentDidMount(){
    RestClient.GetRequest(AppUrl.HomePageTitle).then(result=>{
      this.setState({title:result[0]['home_title'], subtitle:result[0]['home_subtitle']});
    }).catch(error=>{
      this.setState({title: "????", subtitle: "????"})
    })
  } 
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topFixedBanner p-0">
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                    <h1>{this.state.title}</h1>
                    <h4>{this.state.subtitle}</h4>
                    <Button variant="primary">Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
