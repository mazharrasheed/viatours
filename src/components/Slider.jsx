import React, { useEffect, useRef, useState } from 'react';

import Image1 from '../assets/images/image (1).png'
import Image2 from '../assets/images/image (2).png'
import Image3 from '../assets/images/image (3).png'
import Image4 from '../assets/images/image (4).png'
import Image5 from '../assets/images/image (5).png'
import Image6 from '../assets/images/image (6).png'
import Image7 from '../assets/images/image (7).png'
import Image8 from '../assets/images/image (8).png'


const destinations = [
  { title: 'Paris', tours: '100+ Tours', img: Image1 },
  { title: 'Singapore', tours: '300+ Tours', img: Image2 },
  { title: 'Rome', tours: '400+ Tours', img: Image3 },
  { title: 'Bangkok', tours: '100+ Tours', img: Image4 },
  { title: 'Bali', tours: '600+ Tours', img: Image5 },
  { title: 'Phuket', tours: '200+ Tours', img: Image6 },
  { title: 'Tokyo', tours: '700+ Tours', img: Image7 },
  { title: 'Cappadocia', tours: '900+ Tours', img: Image8 },
];

export default function Slider() {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalDots = Math.ceil(destinations.length / 1); // adjust for visible items

  const slideLeft = () => {
    if (isPaused || !sliderRef.current) return;

    const slider = sliderRef.current;
    const firstItem = slider.children[0];
    const itemWidth = firstItem.offsetWidth;

    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(-${itemWidth}px)`;

    setTimeout(() => {
      slider.style.transition = 'none';
      slider.appendChild(firstItem);
      slider.style.transform = 'translateX(0)';
      setCurrentIndex((prev) => (prev + 1) % totalDots);
    }, 500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(slideLeft, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (

    <div className="slider-wrapper">
      <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
        <h3 className="fw-bold text-dark mt-5 ms-3">Trending destinations</h3>
        <a href="#" className="text-primary fw-semibold me-3">See all</a>
      </div>
      <div className="slider-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="slider" ref={sliderRef}>
          {destinations.map((dest, index) => (
            <div className="destination" key={index}>
              <img src={dest.img} alt={dest.title} />
              <p className="fw-bold">{dest.title}</p>
              <small>{dest.tours}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="slider-dots text-center mt-3">
        {Array.from({ length: totalDots }).map((_, index) => (
          <span key={index} className={`dot ${index === currentIndex % totalDots ? 'active' : ''}`}></span>
        ))}
      </div>
    </div>
  );
}
