// PopularTours.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image1 from '../assets/images/image (10).png'
import Image2 from '../assets/images/image (11).png'
import Image3 from '../assets/images/image (12).png'
import Image4 from '../assets/images/image (13).png'
import Image5 from '../assets/images/image (14).png'
import Image6 from '../assets/images/image (15).png'
import Image7 from '../assets/images/image (16).png'
import Image8 from '../assets/images/image (17).png'

const tours = [
  {
    title: 'Paris City Tour',
    description: 'Explore the beautiful landmarks of Paris including the Eiffel Tower and Louvre.',
    price: '$299',
    image: Image1,
  },
  {
    title: 'Desert Safari Dubai',
    description: 'Experience thrilling dune bashing, camel rides, and desert camping.',
    price: '$199',
    image: Image2,
  },
  {
    title: 'Bali Cultural Escape',
    description: 'Discover Bali’s rich heritage, temples, and stunning beaches.',
    price: '$249',
    image: Image3,
  },
  {
    title: 'Bali Cultural Escape',
    description: 'Discover Bali’s rich heritage, temples, and stunning beaches.',
    price: '$249',
    image: Image4,
  },
  {
    title: 'Bali Cultural Escape',
    description: 'Discover Bali’s rich heritage, temples, and stunning beaches.',
    price: '$249',
    image: Image5,
  },
  {
    title: 'Bali Cultural Escape',
    description: 'Discover Bali’s rich heritage, temples, and stunning beaches.',
    price: '$249',
    image: Image6,
  },
  {
    title: 'Bali Cultural Escape',
    description: 'Discover Bali’s rich heritage, temples, and stunning beaches.',
    price: '$249',
    image: Image7,
  },
  {
    title: 'Bali Cultural Escape',
    description: 'Discover Bali’s rich heritage, temples, and stunning beaches.',
    price: '$249',
    image: Image8,
  },
];

const PopularTours = () => (
  <Container className="my-5">
    <h2 className=" mb-4">Find Popular Tours</h2>
    <Row>
      {tours.map((tour, idx) => (
        <Col md={3} key={idx} className="mb-4">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={tour.image} alt={tour.title} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{tour.title}</Card.Title>
              <Card.Text>{tour.description}</Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <strong>{tour.price}</strong>
                <Button variant="primary" size="sm">Book Now</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
    </Row>
  </Container>
);

export default PopularTours;
