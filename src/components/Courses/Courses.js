import React, {Component, Fragment} from 'react';
import {  Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR COURSES</h1>
                    <Row>


                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                  <img className="courseImg" src="https://image.shutterstock.com/image-photo/hand-working-work-space-concept-600w-387375778.jpg" />
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                   <h5 className="courseTitle text-justify">Web Development</h5>
                                    <p className="coursePara text-justify"> I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetailsBtn float-left" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>







                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://image.shutterstock.com/image-photo/hand-working-work-space-concept-600w-387375778.jpg" />

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle text-justify">Web Development</h5>
                                    <p className="coursePara text-justify"> I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetailsBtn float-left" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>


                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://image.shutterstock.com/image-photo/hand-working-work-space-concept-600w-387375778.jpg" />

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle text-justify">Web Development</h5>
                                    <p className="coursePara text-justify"> I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetailsBtn float-left" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>


                        <Col lg={6} md={12} sm={12} className="p-2">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://image.shutterstock.com/image-photo/hand-working-work-space-concept-600w-387375778.jpg" />

                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle text-justify">Web Development</h5>
                                    <p className="coursePara text-justify"> I build native and cross platfrom mobile app for your business app for your business</p>
                                    <Link className="courseDetailsBtn float-left" to="/CourseDetails">Details</Link>
                                </Col>
                            </Row>
                        </Col>

                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Courses;