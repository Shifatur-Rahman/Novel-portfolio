import React, {Component, Fragment} from 'react';
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import ProjectDetails from "../../components/ProjectDetails/ProjectDetails";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Footer from "../../components/Footer/Footer";

class CourseDetailsPage extends Component {
    render() {
        return (
            <Fragment>

                <TopNavigator title="Course Details" />
               <CourseDetails />
          <Footer />

            </Fragment>
        );
    }
}

export default CourseDetailsPage;