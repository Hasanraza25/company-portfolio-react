import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Footer from '../components/Footer/Footer'
import CourseDetails from '../components/CourseDetails/CourseDetails'

export class CourseDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0,0);
  }
  render() {
    return (
        <Fragment>
            <TopNavigation title="Course Details " />  
            <PageTop pagetitle="Course Details" /> 
            <CourseDetails />
            <Footer />
    </Fragment>
    )
  }
}

export default CourseDetailsPage