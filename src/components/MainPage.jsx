import React from 'react'
import heroImage from '../assets/images/hero-image.png'
import image1 from '../assets/images/ticket.png'
import image2 from '../assets/images/hot-air-balloon.png'
import image3 from '../assets/images/diamond.png'
import image4 from '../assets/images/medal.png'
import Navbar from './Navbar'
import Slider from './Slider'
import PopularTours from './PapularTours'
import HeroSection from './HearoSection'
import WhyChoseTours from './WhyChoseTours'
import Footer from './footer'

export default function MainPage() {
    return (

        <>

            {/* <!-- Header Container --> */}
            <div className="container">
                <Navbar></Navbar>
            </div>
            <HeroSection></HeroSection>


            <div className="container">
                <WhyChoseTours></WhyChoseTours>

                <div className="container my-5">

                    <Slider></Slider>
                </div>
                <PopularTours></PopularTours>

                <Footer></Footer>

            </div>
        </>
    )
}
