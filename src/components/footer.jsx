import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { IoLocation } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import {Link, useLocation} from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
      <>
        {!location.pathname.includes("admin") && (
            <footer id="footer" className="secondary-bg-color">
              <Container className="pt-3 pb-2">
                <Row>
                  <Col className="text-center">
                    <div>
                        <Link to="/">
                            <img
                                src="/logo192.png"
                                alt="Our Logo"
                                className="img-fluid"
                                style={{maxWidth: '200px'}}
                            />
                        </Link>
                    </div>

                  </Col>
                </Row>
                  <br/>
                  <Row>
                      <Col>
                          <Row>
                          <Col>
                        <h4 className="fs-4 text-white fw-700">Subscribe Now</h4>
                        <p className="fs-6 text-white m-0 mb-1">
                          Stay updated with the latest offers and services.
                        </p>
                        <div className="form-group">
                          <Form.Control
                              as="textarea"
                              rows={1}
                              placeholder="Enter Your Email"
                          />
                          <Button
                              variant="primary"
                              className="primary-bg-color border-0 w-100 mt-1"
                          >
                            Subscribe
                          </Button>
                        </div>
                      </Col>
                      <Col>
                        <h4 className="fs-4 text-white fw-700">Information</h4>
                        <p className="fs-6 text-white m-0">
                          Find out more about our services and offers.
                        </p>
                      </Col>

                      <Col >
                        <h4 className="fs-4 text-white fw-bold">Helpful Links</h4>
                        <Row className="text-white">
                          <Col>
                            <a href="/" className="text-white d-block">
                              Home
                            </a>
                          </Col>
                          <Col>
                            <a href="/about" className="text-white d-block">
                              About
                            </a>
                          </Col>
                          <Col xs={6} className="mb-2">
                            <a href="/services" className="text-white d-block">
                              Services
                            </a>
                          </Col>
                          <Col>
                            <a href="/vehicles" className="text-white d-block">
                              Vehicles
                            </a>
                          </Col>
                          <Col>
                            <a href="/client" className="text-white d-block">
                              Client
                            </a>
                          </Col>
                          <Col xs={6} className="mb-2">
                            <a href="/contact" className="text-white d-block">
                              Contact
                            </a>
                          </Col>
                        </Row>
                      </Col>
                      <Col>
                        <h4 className="fs-4 text-white fw-700">Contact Us</h4>
                        <p className="fs-6 text-white m-0">
                      <span>
                        <IoLocation className="header-line-2-icon"/>
                        &nbsp;
                        <a
                            href="https://www.google.com/maps/place/Cairo,+Cairo+Governorate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                          Cairo
                        </a>
                      </span>
                          <br/>
                          <span>
                        <BsTelephoneFill size="0.9em" className="header-line-2-icon"/>
                            &nbsp;
                            <a href="tel:+201234567890" className="text-white">
                          (+20) 1234567890
                        </a>
                      </span>
                          <br/>
                          <span>
                        <GrMail className="header-line-2-icon"/>
                            &nbsp;
                            <a
                                href="mailto:nullcars0@gmail.com"
                                className="text-white"
                            >
                          Null-Cars@gmail.com
                        </a>
                      </span>
                        </p>
                        <div className="social-icon">
                          <ul>
                            <li>
                              <a
                                  href="https://www.facebook.com/profile.php?id=61565525378564"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                <BiLogoFacebook/>
                              </a>
                            </li>
                            <li>
                              <a
                                  href="https://twitter.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                <AiOutlineTwitter/>
                              </a>
                            </li>
                            <li>
                              <a
                                  href="https://www.linkedin.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                <BiLogoLinkedin/>
                              </a>
                            </li>
                            <li>
                              <a
                                  href="https://www.instagram.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                <AiFillInstagram/>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="text-white text-center fs-6 mt-2 mb-1">
                      {new Date().getFullYear()} All Rights Reserved. Developed & Designed by &nbsp;
                      <a
                          href="https://github.com/NullCars"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary"
                      >
                        Null_Team
                      </a>
                    </p>
                  </Col>
                </Row>
              </Container>
            </footer>
        )}
      </>
  );
};

export default Footer;
