import React, {Component, Fragment} from 'react';
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import PageTop from "../../components/PageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import Privacy from "../../components/Privacy/Privacy";

class PrivacyPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>


                <TopNavigator title="Privacy Policy" />
                <PageTop propTitle="Privacy Policy" />
                <Privacy />

                <Footer/>

            </Fragment>
        );
    }
}

export default PrivacyPage;