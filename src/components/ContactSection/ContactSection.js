import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
<Container>
    <Row>
        <Col lg={6} md={6} sm={12} className="mt-5">
            <h1 className="reviewTitle">Quick Contact</h1>
            <Form>
                <Form.Group>
                    <Form.Label className="footerAddress">Name</Form.Label>
                    <Form.Control type="text" />

                </Form.Group>

                <Form.Group>
                    <Form.Label className="footerAddress">Email address</Form.Label>
                    <Form.Control type="email"/>

                </Form.Group>

                <Form.Group>
                    <Form.Label className="footerAddress">Your message</Form.Label>
                    <Form.Control  as="textarea" rows="5"  />

                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>

        <Col lg={6} md={6} sm={12} className="p-5">
            <h1 className="reviewTitle">Discuss Now</h1>
            <p className="footerAddress">Khilkhet,Dhaka-1229</p>
            <p className="footerAddress"><FontAwesomeIcon  icon={faEnvelope} /> shifaturnovel@gmail.com</p>
            <p className="footerAddress"><FontAwesomeIcon  icon={faPhone} /> 01921601608</p>

        </Col>
    </Row>
</Container>


            </Fragment>
        );
    }
}

export default ContactSection;