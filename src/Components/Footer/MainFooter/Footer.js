import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Row className="m-0">
                <Col className="d-flex justify-content-center" xs={12} sm={5} lg={5}>
                    <div className="icons">
                        <img className="logo" src="https://i.ibb.co/3hvKCjc/Group-86.png" alt="logo" /> <br />
                        <img src="https://i.ibb.co/37Bdvfg/facebook-logo-in-circular-shape-2x.png" alt="" />
                        <img src="https://i.ibb.co/sbPw581/twitter-4-2x.png" alt="" />
                        <img src="https://i.ibb.co/Z2TzQ9v/linkedin-2-2x.png" alt="" />
                        <img src="https://i.ibb.co/xLBT666/dribbble-1-2x.png" alt="" />
                        <img src="https://i.ibb.co/RpFMS5M/be-logo.png" alt="be-logo" />
                    </div>
                </Col>
                <Col xs={12} sm={7} lg={7}>
                    <Row className="m-0">
                        <Col className="d-flex flex-column justify-content-center " xs={12} sm={6} md={6} lg={4}>
                            <a href="#">Features</a>
                            <a href="#">Enterprise</a>
                            <a href="#">Pricing</a>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center " xs={12} sm={6} md={6} lg={4}>
                            <a href="#">Blog</a>
                            <a href="#">Help Center</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Status</a>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center " xs={12} sm={6} md={6} lg={4}>
                            <a href="#">About Us</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Security</a>
                            <a href="#">Login</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;