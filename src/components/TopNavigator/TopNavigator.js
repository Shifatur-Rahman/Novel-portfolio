import React, { Component, Fragment } from "react";
import { Navbar, Nav } from "react-bootstrap";
import whiteLogo from "../../asset/image/whiteLogo.svg";
import blueLogo from "../../asset/image/blueLogo.svg";
import "../../asset/css/custom.css";
import { NavLink } from "react-router-dom";

class TopNavigator extends Component {
  constructor(props) {
    super();
    this.state = {
      navTitleNew: "navTitle",
      newWhiteLogo: [whiteLogo], // img theke asce
      newNavBar: "navBar",
      newNavBarItem: "navBarItem",
      navVariant: "red",
      pageTitle: props.title,
    };
  }

  onScroll = () => {
    if (window.scrollY > 100) {
      this.setState({
        navTitleNew: "navTitleScroll",
        newWhiteLogo: [blueLogo],
        newNavBar: "navBarScroll",
        newNavBarItem: "navBarItemScroll",
        navVariant: "light",
      });
    } else if (window.scrollY < 100) {
      this.setState({
        navTitleNew: "navTitle",
        newWhiteLogo: [whiteLogo],
        newNavBar: "navBar",
        newNavBarItem: "navBarItem",
        navVariant: "dark",
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }
  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar
          className={this.state.newNavBar}
          fixed='top'
          collapseOnSelect
          expand='lg'
          variant={this.state.navVariant}
        >
          <Navbar.Brand>
            <NavLink to='/' className={this.state.navTitleNew}>
              {" "}
              <img src={this.state.newWhiteLogo} /> Shifatur Rahman{" "}
            </NavLink>{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'></Nav>
            <Nav>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#66b3ff" }}
                  className={this.state.newNavBarItem}
                  to='/'
                >
                  Home
                </NavLink>{" "}
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#66b3ff" }}
                  className={this.state.newNavBarItem}
                  to='/service'
                >
                  Services
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#66b3ff" }}
                  className={this.state.newNavBarItem}
                  to='/course'
                >
                  Courses
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#66b3ff" }}
                  className={this.state.newNavBarItem}
                  to='/portfolio'
                >
                  Portfolio
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#66b3ff" }}
                  className={this.state.newNavBarItem}
                  to='/contact'
                >
                  Contact
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <NavLink
                  exact
                  activeStyle={{ color: "#66b3ff" }}
                  className={this.state.newNavBarItem}
                  to='/about'
                >
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigator;
