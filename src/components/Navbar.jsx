import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoimg from '../assets/images/Link-logo.png'

export default function Navbar() {

    //   const location = useLocation(); // Get the current location

    return (

        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid my-nav">
                    <div className="briks  nav-left">
                        <img className='img' src={logoimg} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0  ">
                            <li className="nav-item nav-list-items">
                                <a href="#" className="nav-link">Search destinations or activities</a>
                            </li>
                            <li className="nav-item">
                                < a href="#" className="nav-link">Destinations</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">USD</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Activities</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Sign up</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn custom-login-btn me-3">Log in</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>


        </>

    )
}
