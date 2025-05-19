// PopularTours.js
import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import image1 from '../assets/images/ticket.png'
import image2 from '../assets/images/hot-air-balloon.png'
import image3 from '../assets/images/diamond.png'
import image4 from '../assets/images/medal.png'


const tours = [
    {
        title: 'Ultimate flexibility',
        description1: "You're in control, with free",
        description2: 'cancellation and payment options',
        description3: 'tosatisfy any plan or budget.',
        image: image1,
    },
    {
        title: 'Memorable experiences',
        description1: "Browse and book tours and activities",
        description2: "so incredible, you'll want to tell your",
        description3: 'friends.',
        
        image: image2,
    },
    {
        title: 'Quality at our core',
        description1: 'High-quality standards. Millions of',
        description2: 'reviews. A tourz company',
        description3: '',
        image: image3,
    },
    {
        title: 'Award-winning support',
        description1: "New price? New plan? No problem",
        description2: "We're here to help, 24/7",
        description3: '',
        image: image4,
    },

];

const PopularTours = () => (
    <Container className="">
        <h2 className="mt-5">Why Chose Tours</h2>
        <Row>
            {tours.map((tour, idx) => (
                <Col md={3} key={idx} className=" mt-5">
                    <div><img src={tour.image} alt="" /></div>
                    <div className="mt-5 fs-3">
                        {tour.title}</div>
                    <div className="mt-3 fs-5">
                        {tour.description1}<br />{tour.description2} <br /> {tour.description3}.</div>
                    <div></div>
                </Col>
            ))}
        </Row>
    </Container>
);
export default PopularTours;
