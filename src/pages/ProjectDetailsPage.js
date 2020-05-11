import React, {Component, Fragment} from 'react';
import TopNavigator from "../components/TopNavigator/TopNavigator";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";

class ProjectDetailsPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>

                <TopNavigator title="Project Details" />
                <PageTop propTitle="Project Details" />
               <ProjectDetails />

                <Footer/>

            </Fragment>
        );
    }
}

export default ProjectDetailsPage;