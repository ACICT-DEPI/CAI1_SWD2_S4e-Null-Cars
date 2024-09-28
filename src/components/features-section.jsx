import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineSafety } from "react-icons/ai";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";

const FeaturesSection = () => {
    return (
        <div id="features-section" className="bg-lightblue py-5">
            <Container>
                <Row>
                    <Col className="text-center mb-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <h1 className="quinary-color fs-1 p-0 mb-0 fw-500" style={{ marginRight: '0.5rem' , color:'#111111' }}>WHY CHOOSE</h1>
                            <h1 className="fs-1 p-0 mb-0 fw-700" style={{ color: '#fe5b29' }}>NULL_CARS</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                        <AiOutlineSafety size="2.5em" color="#fff"/>
                        <h4 className="quinary-color fs-5 py-1">Safety &amp; Security</h4>
                        <p className="quinary-color fs-6 m-0 pb-2">
                            At Null_Cars, your safety is our top priority. We conduct thorough inspections on every vehicle
                            to ensure it meets the highest standards. Drive confidently knowing that your rental is secure.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                        <HiOutlineStatusOnline size="2.5em" color="#fff"/>
                        <h4 className="quinary-color fs-5 py-1">Online Booking</h4>
                        <p className="quinary-color fs-6 m-0 pb-2">
                            Enjoy a seamless booking experience with our intuitive online system. Reserve your vehicle
                            quickly and manage your rental effortlessly from your device.
                        </p>
                    </Col>
                    <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                        <BiSolidOffer size="2.5em" color="#fff"/>
                        <h4 className="quinary-color fs-5 py-1">Best Offers</h4>
                        <p className="quinary-color fs-6 m-0 pb-2">
                            Take advantage of our competitive rates and exclusive deals. Null_Cars offers great value with
                            frequent promotions and discounts to fit your needs.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FeaturesSection;
