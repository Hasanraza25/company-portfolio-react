import React, { Component, Fragment } from "react";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import AllCourses from "../components/AllCourses/AllCourses";

export class AllCoursesPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Our Courses" />
        <PageTop pagetitle="Our Courses" />
        <AllCourses />
        <Footer />
      </Fragment>
    );
  }
}

export default AllCoursesPage;
