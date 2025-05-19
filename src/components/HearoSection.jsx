import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import heroImage from '../assets/images/hero-image.png'

const HeroSection = () => (
  <div>
 {/* <!-- Hero Section --> */}
             <div className="hero-section position-relative">
                 <img src={heroImage} className="img-fluid position-absolute w-100 h-100 top-0 start-0 hero-bg"
                     alt="Hero Background" />
                 {/* <!-- Headline --> */}
                 <div className="hero-title text-white ">
                     <p className="fw-semibold">Your world of joy</p>
                 </div>
                 {/* <!-- Subtitle --> */}
                 <div className="hero-subtitle text-white">
                     <p>From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
                     {/* </div>
 
 
                 <!-- Search Box --> */}
 
                     <div className="search-box bg-white rounded-3 d-flex align-items-center row px-3 where">
                         {/* <!-- Where --> */}
                         <div className="search-item me-3 col-md-4 ">
                             <div className="ms-2">
                                 <div className="fw-medium">Where</div>
                                 <input className='form-control where-input' placeholder='Search destinations'></input>
                             </div>
                         </div>
                         {/* <!-- When --> */}
                         <div className="search-item me-3 col-md-3">
                             <div className="ms-2">
                                 <div className="fw-medium">When</div>
                                 <input className='form-control where-input' type='date' placeholder='Search destinations'></input>
                             </div>
                         </div>
                         {/* <!-- Tour Type --> */}
                         <div className="search-item me-3 col-md-3">
                             <div className="ms-2">
                                 <div className="fw-medium">Tour Type</div>
                                 <select className='form-control where-input' name="" id="">
                                     <option value=""> All Tour</option>
                                     <option value=""> xyz</option>
                                     <option value=""> xyz</option>
                                     <option value=""> xyz</option>
                                     <option value=""> xyz</option>
                                     <option value=""> xyz</option>
                                 </select>
                             </div>
                         </div>
                         {/* <!-- Search Button --> */}
                         <div className='col-md-2' >
                         <button className="btn search-button text-white fw-semibold">Search</button>
                         </div>
                         
                     </div>
                 </div>
  </div>
  </div>
);

export default HeroSection;