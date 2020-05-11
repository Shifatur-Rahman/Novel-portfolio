import React, {Component, Fragment} from 'react';
import ContactSection from "../../components/ContactSection/ContactSection";
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import PageTop from "../../components/PageTop/PageTop";
import Footer from "../../components/Footer/Footer";

class ContactPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigator title="Contact" />
                <PageTop propTitle="Contact ME"/>
                <ContactSection/>
                <Footer/>
                
            </Fragment>
        );
    }
}

export default ContactPage;