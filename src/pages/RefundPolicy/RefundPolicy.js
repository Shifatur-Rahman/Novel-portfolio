import React, {Component, Fragment} from 'react';
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import Refund from "../../components/Refund/Refund";
import Footer from "../../components/Footer/Footer";
import PageTop from "../../components/PageTop/PageTop";

class RefundPolicy extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>

                <TopNavigator title="Refund Policy" />
                <PageTop propTitle="REFUND POLICY" />
               <Refund />

                <Footer/>

            </Fragment>
        );
    }
}

export default RefundPolicy;