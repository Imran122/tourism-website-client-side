import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-content">
            <Container className="mb-0 w-100 mx-auto footer-content">

                <footer>
                    <Row>
                        <Col sm={4} lg={4}>
                            <h4 className="footer-title">Island Trips Planner</h4>
                            <ul className="list-unstyled">
                                <li>0177854444</li>
                                <li>dhanmondi,Dhaka</li>
                                <li>Bangladesh, BD</li>
                            </ul>
                        </Col>
                        <Col sm={4} lg={4}>
                            <h4 className="footer-title">Privacy & Policy</h4>
                            <ul className="list-unstyled">
                                <li>Privacy</li>
                                <li>Setting</li>
                                <li>Terms & Service</li>
                            </ul>
                        </Col>
                        <Col sm={4} lg={4}>
                            <h4 className="footer-title">Company</h4>
                            <ul className="list-unstyled">
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="row">
                        <p className="col-sm" className="last-content-footer">
                            @{new Date().getFullYear()} Island Trips Planner | All right Reserved | Terms & Service | Privacy
                        </p>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;