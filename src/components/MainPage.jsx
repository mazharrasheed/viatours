import React from 'react'
import heroImage from '../assets/images/hero-image.png'
import image1 from '../assets/images/ticket.png'
import image2 from '../assets/images/hot-air-balloon.png'
import image3 from '../assets/images/diamond.png'
import image4 from '../assets/images/medal.png'
import Navbar from './Navbar'
import Slider from './Slider'

export default function MainPage() {
    return (

        <>

            {/* <!-- Header Container --> */}
            <div className="container">
                <Navbar></Navbar>
            </div>
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
                {/* <!-- Wave Bottom --> */}

            </div>

            {/* <!-- why chose tours --> */}
            <div className="container mt-3 chose-tours">
                <div className="row">
                    <div className="col-md-3">
                        <div><img src={image1} alt="" /></div>
                        <div className="mt-5 fs-3">
                            Ultimate flexibility</div>
                        <div className="mt-3 fs-5">
                            You're in control, with free<br />cancellation and payment options <br /> tosatisfy any plan or budget.</div>
                        <div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <div><img src={image2} alt="" /></div>
                        <div className="mt-5 fs-3">
                            Memorable experiences</div>
                        <div className="mt-3 fs-5">
                            Browse and book tours and activities<br />so incredible, you'll want to tell your<br />friends.</div>
                        <div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <div><img src={image3} alt="" /></div>
                        <div className="mt-5 fs-3">
                            Quality at our core</div>
                        <div className="mt-3 fs-5">
                            High-quality standards. Millions of<br />reviews. A tourz company.</div>
                        <div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-5">
                        <div><img src={image4} alt="" /></div>
                        <div className="mt-5 fs-3">
                            Award-winning support</div>
                        <div className="mt-3 fs-5">
                            New price? New plan? No problem.<br />We're here to help, 24/7.</div>
                        <div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Slider --> */}
            <div className="container my-5">
                <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
                    <h3 className="fw-bold text-dark mt-5 ms-3">Trending destinations</h3>
                    <a href="#" className="text-primary fw-semibold me-3">See all</a>
                </div>
                <Slider></Slider>
            </div>
        </>
    )
}
