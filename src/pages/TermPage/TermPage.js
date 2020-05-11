import React, {Component, Fragment} from 'react';
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import PageTop from "../../components/PageTop/PageTop";
import Footer from "../../components/Footer/Footer";
import Terms from "../../components/Terms/Terms";

class TermPage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>

                <TopNavigator title="Terms & Condition" />
                <PageTop propTitle="Terms & Condition" />
           <Terms />

                <Footer/>
            </Fragment>
        );
    }
}

export default TermPage;