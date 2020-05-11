import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-5">
                        <Col lg={6} md={6} sm={12}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://rabbil.com/ControlPanel/Images/foodbazz.png" />
                            </Card>
                    </Col>

                        <Col lg={6} md={6} sm={12}>

                                <Card.Body>
                                    <h1 className="courseTitle ">FOOD BAZZ</h1>

                                    <h4 className="projectsDetailsCardTitle">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one.</h4>
                                    <br />
                                    <ul>
                                        <li className="projectsCardTitleDes">Unlimited Dynamic Product Category</li>
                                        <li className="projectsCardTitleDes">Admin Can Add, Edit, Delete Product Dynamically</li>
                                        <li className="projectsCardTitleDes">Dynamic shipping point facilities</li>
                                        <li className="projectsCardTitleDes">Admin can send special offer for special user</li>
                                        <li className="projectsCardTitleDes">App force update system form server</li>
                                        <li className="projectsCardTitleDes">App can receive push notification anytime also after the app is closed.</li>
                                        <li className="projectsCardTitleDes">Admin can send free message in app inbox</li>
                                        <li className="projectsCardTitleDes">Admin can push notification to specific user</li>
                                        <li className="projectsCardTitleDes">User can make wishlist</li>
                                        <li className="projectsCardTitleDes">User can see order history and invoice also</li>
                                        <li className="projectsCardTitleDes">Dynamic Product Slider</li>
                                        <li className="projectsCardTitleDes">Video Blog</li>
                                    </ul>
                                    <Button variant="primary">Live Preview</Button>
                                </Card.Body>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ProjectDetails;