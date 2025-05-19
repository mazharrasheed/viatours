import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import mastercard from '../assets/images/mastercard.png'
import visacard from '../assets/images/visacard.png'
import americancard from '../assets/images/americancard.png'
import papalcard from '../assets/images/paypal.png'
import googleplay from '../assets/images/googleplay.png'
import applestore from '../assets/images/applestore.png'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#fff5f0', padding: '60px 0', marginTop: '50px' }}>
            <Container>
                <Row className="mb-4 p-5">
                    <Col md={5} className='offset-md-1' >
                        <h5>Speak to our expert: <span style={{ color: '#ff5e14' }}>1-800-453-6744</span></h5>
                    </Col>
                    <Col md={4} className="offset-md-2 text-md-center mt-3 mt-md-0">
                        <h6>Follow Us</h6>
                        <div className='d-flex justify-content-center'>
                            <div className="ms-3"><FaFacebookF></FaFacebookF></div>
                            <div className="ms-3"><FaTwitter></FaTwitter></div>
                            <div className="ms-3"><FaLinkedinIn></FaLinkedinIn></div>
                            <div className="ms-3"><FaInstagram></FaInstagram></div>
                            
                        
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="mb-5 ps-5">
                    <Col md={3}>
                        <h6>Contact</h6>
                        <ul className="list-unstyled">
                            <li>328 Queensberry Street, North Melbourne VIC3051</li>
                            <li>Australia.</li>
                            <li>hi@viatours.com</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h6>Company</h6>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Tourz Reviews</li>
                            <li>Contact Us</li>
                            <li>Travel Guides</li>
                            <li>Data Policy</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </Col>
                    <Col md={2}>
                        <h6>Support</h6>
                        <ul className="list-unstyled">
                            <li>Get In Touch</li>
                            <li>Help Center</li>
                            <li>Live Chat</li>
                            <li>How it works</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h6>Newsletter</h6>
                        <p>Subscribe to our newsletter for news and updates.</p>
                        <Form className="d-flex mb-5">
                            <Form.Control type="email" placeholder="Enter your email" className="me-2" />
                            <Button variant="dark">Send</Button>
                        </Form>
                    </Col>
                    <Col md={2}>
                        <div className="ms-4">
                            <h6>Mobile Apps</h6>
                            <div className='mt-3'>
                                <a href=""> <img src={googleplay} alt="App Store" width="100" /> </a>
                                <a href=""> <img className='playstore' src={applestore} alt="Play Store" width="100" /></a>

                            </div>
                        </div>

                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={6}>
                        <p>&copy; Copyright Viatours 2024</p>
                    </Col>
                    <Col md={6} className="text-md-end pe-5">
                        <img src={mastercard} width={50} alt="Payments" />
                        <img src={visacard} width={50} alt="Payments" />
                        <img src={americancard} width={50} alt="Payments" />
                        <img src={papalcard} width={50} alt="Payments" />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
