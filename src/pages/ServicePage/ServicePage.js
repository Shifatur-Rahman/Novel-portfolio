import React, {Component, Fragment} from 'react';
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import PageTop from "../../components/PageTop/PageTop";
import MyService from "../../components/MyService/MyService";
import Footer from "../../components/Footer/Footer";
import ContactSection from "../../components/ContactSection/ContactSection";

class ServicePage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigator title="Service" />
                <PageTop propTitle="GET MY SERVICES" />
                <MyService/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;