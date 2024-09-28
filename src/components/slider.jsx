import React, { useState, useRef } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { GrNext, GrPrevious } from 'react-icons/gr';
import './Slider.css'; // Ensure to include the CSS file

const Slider = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

    const slides = [
        {
            title: 'Drive with Confidence',
            subtitle: 'At Null_Cars',
            description: 'Discover top-rated vehicles and enjoy unparalleled service with every rental.',
        },
        {
            title: 'Your Journey',
            subtitle: 'Starts Here',
            description: 'Find the perfect car for any occasion with flexible rental options and premium support.',
        },
    ];

    const handleSelect = (selectedIndex) => {
        setCurrentSlide(selectedIndex); // Update current slide index
    };

    const onPrevClick = () => {
        sliderRef.current.prev();
    };

    const onNextClick = () => {
        sliderRef.current.next();
    };

    return (
        <div id="slider">
            <div className="banner-container">
                <Container fluid className="p-0">
                    <Row className="h-100 justify-content-center align-items-center">
                        <Col xs={12} md={8} lg={6} className="position-relative">
                            <Carousel
                                ref={sliderRef}
                                activeIndex={currentSlide}
                                onSelect={handleSelect}
                                controls={false}
                                indicators={false}
                                interval={3000}
                            >
                                {slides.map((slide, index) => (
                                    <Carousel.Item key={index}>
                                        <Carousel.Caption className="custom-caption d-flex flex-column align-items-center justify-content-center text-light">
                                            <h2 className="display-4 mb-4">
                                                <span>{slide.title}</span>
                                                <br />
                                                <span className={`highlight-${index === 0 ? 'primary' : 'success'}`}>{slide.subtitle}</span>
                                            </h2>
                                            <p className="lead mb-4">{slide.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                            <div className="slider-nav-buttons position-absolute top-50 start-50 translate-middle d-flex justify-content-between w-100 px-4">
                                <Button
                                    variant="light"
                                    onClick={onPrevClick}
                                    className={`nav-btn border-0 rounded-circle p-2 shadow ${
                                        currentSlide === 0 ? 'btn-primary hover-primary' : 'btn-success hover-success'
                                    }`}
                                >
                                    <GrPrevious size={24} />
                                </Button>
                                <Button
                                    variant="light"
                                    onClick={onNextClick}
                                    className={`nav-btn border-0 rounded-circle p-2 shadow ${
                                        currentSlide === 0 ? 'btn-primary hover-primary' : 'btn-success hover-success'
                                    }`}
                                >
                                    <GrNext size={24} />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Slider;
