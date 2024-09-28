import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AboutImage from '../assets/images/about-image.png';

const AboutSection = () => {
    return (
        <div id="about-section" className="py-5">
            <Container>
                <Row className="align-items-center">
                    <Col xs={{ span: 12, order: "last" }} md={{ span: 6, order: "first" }}>
                        <div className="image-container">
                            <img src={AboutImage} className="about-img img-fluid" alt="About Us" />
                        </div>
                    </Col>
                    <Col xs={{ span: 12, order: "first" }} md={{ span: 6, order: "last" }}>
                        <div className="mt-4 mt-md-0">
                            <h1 className="text-uppercase fs-1 fw-600">
                                About <span className="primary-color">Us</span>
                            </h1>
                            <p className="about-text fs-5 mb-3 fw-400">
                                At Null_Cars, we are committed to providing exceptional car rental services that cater to your needs. With a fleet of well-maintained vehicles and a user-friendly booking system, we ensure a seamless and reliable experience for every customer. Our team is dedicated to delivering personalized service and ensuring your safety and satisfaction on every journey.
                            </p>
                            <p className="about-text fs-5 mb-3 fw-400">
                                Founded with a passion for cars and customer service, Null_Cars aims to redefine car rentals by combining modern technology with a customer-centric approach. Whether you're renting for a business trip, vacation, or special event, we offer competitive rates and a range of options to suit every preference.
                            </p>
                            <p className="about-text fs-5 mb-3 fw-400">
                                Explore our diverse fleet, enjoy flexible rental terms, and experience the convenience of our online booking platform. At Null_Cars, we're not just about renting cars; we're about enhancing your travel experience and ensuring your complete satisfaction.
                            </p><br></br>
                            <div className="mt-3">
                                <a href="#" className="readmore-btn fs-5 px-3 py-2">Read More</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutSection;
