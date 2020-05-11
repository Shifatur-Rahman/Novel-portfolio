import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Privacy extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="p-5">
                        <Col lg={12} md={12} sm={12}>
                            <ul>
                                <li className="coursePara text-justify "> BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</li>
                                <br />
                                <li className=" coursePara text-justify">BY VIEWING, VISITING, USING, OR INTERACTING WITH THIS SITE OR WITH ANY BANNER, POP-UP, OR ADVERTISING THAT APPEARS ON IT, YOU ARE AGREEING TO ALL THE PROVISIONS OF THIS TERMS OF USE POLICY AND THE PRIVACY POLICY OF this site.</li>
                                <br />
                                <li className="coursePara text-justify">THIS SITE SPECIFICALLY DENIES ACCESS TO ANY INDIVIDUAL THAT IS COVERED BY THE CHILDREN'S ONLINE PRIVACY PROTECTION ACT (COPPA) OF 1998.</li>
                                <br />
                                <li className="coursePara text-justify">THIS SITE RESERVES THE RIGHT TO DENY ACCESS TO ANY PERSON OR VIEWER FOR ANY LAWFUL REASON. UNDER THE TERMS OF THE PRIVACY POLICY, WHICH YOU ACCEPT AS A CONDITION FOR VIEWING, THIS SITE IS ALLOWED TO COLLECT AND STORE DATA AND INFORMATION FOR THE PURPOSE OF EXCLUSION AND FOR MANY OTHER USES.</li>
                                <br />
                                <li className="coursePara text-justify">THIS TERMS OF USE AGREEMENT MAY CHANGE FROM TIME TO TIME. VISITORS HAVE AN AFFIRMATIVE DUTY, AS PART OF THE CONSIDERATION FOR PERMISSION TO ACCESS this site, TO KEEP THEMSELVES INFORMED OF SUCH CHANGES BY REVIEWING THIS TERMS OF USE PAGE EACH TIME THEY VISIT THIS SITE.</li>
                                <br />
                                <h1 className="reviewTitle text-justify">PARTIES TO THE TERMS OF USE AGREEMENT</h1>
                                <li className="coursePara text-justify">Visitors, viewers, users, subscribers, members, affiliates, or customers, collectively referred to herein as “Visitors,” are parties to this agreement. The website and its owners and/or operators are parties to this agreement, herein referred to as “Website.”</li>
                            </ul>

                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Privacy;