import React, {Component, Fragment} from 'react';
import {Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ServicePage from "../pages/ServicePage/ServicePage";
import CoursePage from "../pages/CoursePage/CoursePage";
import Portfolio from "../pages/Portfolio/Portfolio";
import AboutPage from "../pages/AboutPage/AboutPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import RefundPolicy from "../pages/RefundPolicy/RefundPolicy";
import TermPage from "../pages/TermPage/TermPage";
import PrivacyPage from "../pages/PrivacyPage/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage/CourseDetailsPage";

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
<Switch>

    <Route exact path="/" component={HomePage}/>
    <Route exact path="/service" component={ServicePage}/>
    <Route exact path="/course" component={CoursePage}/>
    <Route exact path="/portfolio" component={Portfolio}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/contact" component={ContactPage}/>
    <Route exact path="/Refund" component={RefundPolicy} />
    <Route exact path="/Terms" component={TermPage} />
    <Route exact path="/Privacy" component={PrivacyPage} />
    <Route exact path="/ProjectDetails" component={ProjectDetailsPage} />
    <Route exact path="/CourseDetails" component={CourseDetailsPage} />



</Switch>
                
            </Fragment>
        );
    }
}

export default AppRouter;