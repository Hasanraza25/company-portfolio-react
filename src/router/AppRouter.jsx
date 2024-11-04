import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AllServicePage from '../pages/AllServicePage';
import AllCourses from '../pages/AllCoursesPage';
import PortfolioPage from '../pages/PortfolioPage';
import ContactPage from '../pages/ContactPage';
import RefundPage from '../pages/RefundPage';
import PrivacyPage from '../pages/PrivacyPage';
import TermsPage from '../pages/TermsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import CourseDetailsPage from '../pages/CourseDetailPage';

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} /> 
          <Route exact path="/about" component={AboutPage} /> 
          <Route exact path="/service" component={AllServicePage} /> 
          <Route exact path="/courses" component={AllCourses} /> 
          <Route exact path="/portfolio" component={PortfolioPage} /> 
          <Route exact path="/contact" component={ContactPage} /> 
          <Route exact path="/refund" component={RefundPage} /> 
          <Route exact path="/privacy" component={PrivacyPage} /> 
          <Route exact path="/terms" component={TermsPage} /> 
          <Route exact path="/projectdetails" component={ProjectDetailPage} /> 
          <Route exact path="/coursedetails" component={CourseDetailsPage} /> 
        </Switch>
      </Fragment>
    )
  }
}

export default AppRouter