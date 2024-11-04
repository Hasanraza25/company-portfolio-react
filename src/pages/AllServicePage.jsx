import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import ContactSec from "../components/ContactSec/ContactSec";

class AllServicePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Services" />
        <PageTop pagetitle="Our Services" />
        <Services />
        <ContactSec />
        <Footer />
      </Fragment>
    );
  }
}

export default AllServicePage;
