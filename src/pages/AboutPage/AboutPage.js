import React, {Component, Fragment} from 'react';
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import PageTop from "../../components/PageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import AboutMe from "../../components/AboutMe/AboutMe";

class AboutPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {

        return (
            <Fragment>

                <TopNavigator title="About" />
                <PageTop propTitle="About US" />
                <AboutMe/>

                <Footer/>
            </Fragment>
        );
    }
}

export default AboutPage;