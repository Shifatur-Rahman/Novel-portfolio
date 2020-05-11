import React, {Component, Fragment} from 'react';
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import PageTop from "../../components/PageTop/PageTop";
import AllCourses from "../../components/AllCourses/AllCourses";
import Footer from "../../components/Footer/Footer";

class CoursePage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigator title="Course" />
                <PageTop propTitle="ALL COURSES" />
                <AllCourses />
                <Footer/>

            </Fragment>
        );
    }
}

export default CoursePage;