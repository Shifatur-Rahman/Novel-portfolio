import React, {Component, Fragment} from 'react';
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import PageTop from "../../components/PageTop/PageTop";
import ComponentsPortfolio from "../../components/ComponentsPortfolio/ComponentsPortfolio";
import Footer from "../../components/Footer/Footer";

class Portfolio extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigator title="Portfolio" />
                <PageTop propTitle="PORTFOLIO" />
                <ComponentsPortfolio />
                <Footer/>

            </Fragment>
        );
    }
}

export default Portfolio;