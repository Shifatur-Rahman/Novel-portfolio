import React, { Component, Fragment } from "react";
import TopNavigator from "../../components/TopNavigator/TopNavigator";
import TopBanner from "../../components/TopBanner/TopBanner";
import Services from "../../components/Services/Services";
import Analysis from "../../components/Analysis/Analysis";
import Summary from "../../components/Summary/Summary";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Courses from "../../components/Courses/Courses";
import Video from "../../components/Video/Video";
import Review from "../../components/Review/Review";
import Footer from "../../components/Footer/Footer";

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <TopNavigator title='Home' />
        <TopBanner />
        <Services />
        <Analysis />
        <Summary />
        <RecentProjects />
        <Courses />
        <Video />
        <Review />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
