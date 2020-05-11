import React, { Component, Fragment } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { BigPlayButton, Player } from "video-react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className='topFixedPage p-0'>
          <div className='topPageOverlay'>
            <Container className='topPageCourseContent'>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <h4 className='CourseFulDetails'>
                    {" "}
                    Full Dynamic Website With Admin Panel
                  </h4>
                  <h5 className='CourseSubTitleDetails'>Total Lecture=30</h5>
                  <h5 className='CourseSubTitleDetails'>Total Student=30</h5>
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <p className='CourseFulDescription text-justify'>
                    I am a highly talented, experienced, professional and
                    cooperative software engineer, I am working in programming
                    and web world for more than 4 years .I assure you a wide
                    range of quality IT services. Web development, mobile app
                    development and UI design the major filed i am expert in.
                    Moreover i have teaching passion. I makes video tutorial to
                    share my knowledge. My over all skill makes me a complete
                    software developer, so you can hire me for your projects
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>

        <Container className='mt-5'>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className='serviceName'>Skill You Get</h1>

              <br />
              <p>
                <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} />{" "}
                Unlimited Dynamic Product Category
              </p>
              <p>
                <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} />{" "}
                Unlimited Dynamic Product Category
              </p>
              <p>
                <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} />{" "}
                Unlimited Dynamic Product Category
              </p>
              <p>
                <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} />{" "}
                Unlimited Dynamic Product Category
              </p>
              <p>
                <FontAwesomeIcon className='iconBullet' icon={faCheckCircle} />{" "}
                Unlimited Dynamic Product Category
              </p>

              <Button variant='primary' type='submit'>
                BUY NOW
              </Button>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Player>
                <source src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' />
                <BigPlayButton position='center' />
              </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CourseDetails;
