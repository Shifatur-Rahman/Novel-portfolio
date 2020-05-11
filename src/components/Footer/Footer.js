import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope,faPhone} from  "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="reviewTitle">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a> <br />
                            <a className="socialLink" href="#"><FontAwesomeIcon  icon={faTwitter} /> Twitter</a>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="reviewTitle">Address</h1>
                            <p className="footerAddress">Khilkhet,Dhaka-1229</p>
                            <p className="footerAddress"><FontAwesomeIcon  icon={faEnvelope} /> shifaturnovel@gmail.com</p>
                            <p className="footerAddress"><FontAwesomeIcon  icon={faPhone} /> 01921601608</p>

                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="reviewTitle">Information</h1>
                            <Link className="footerLink" to="/about">About Me</Link> <br />
                            <a className="footerLink" href="#">My Resume</a><br />
                            <Link className="footerLink" to="/contact">Contact</Link>
                        </Col>

                        <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                            <h1 className="reviewTitle">Legal</h1>
                            <Link className="footerLink" to="/Refund">Refund policy</Link> <br />
                            <Link className="footerLink" to="/Terms">Terms & Condition</Link><br />
                            <Link className="footerLink" to="/Privacy">Privacy Policy</Link>

                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRightLink" href="#">Developed By Shifatur :) 2019-2020</a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;