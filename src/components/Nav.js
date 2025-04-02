import "../App.css";
import logo from '../images/logo.svg';
import React from 'react';
import {Link} from "react-router-dom";


const Nav = () => {
    return(
        <div className="main-navbar">
            <img src={logo} alt="Little Lemon Logo"></img>
            <input type="checkbox" id="main-menu-toggle" className="toggle-checkbox"></input>
            <label for="main-menu-toggle" className="main-menu-toggle-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="#495E57" class="bi bi-list menu-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </label>
            <nav className="main-nav-links">
                <Link to="/" className="main-nav-link-item karla-descriptive-cta">Home</Link>
                <Link to="/#about-section" className="main-nav-link-item karla-descriptive-cta">About</Link>
                <Link to="menu" className="main-nav-link-item karla-descriptive-cta">Menu</Link>
                <Link to="reservations" className="main-nav-link-item karla-descriptive-cta">Reservations</Link>
                <Link to="order-online" className="main-nav-link-item karla-descriptive-cta">Order Online</Link>
                <Link to="login" className="main-nav-link-item karla-descriptive-cta">Login</Link>
            </nav>
        </div>
    )
}

export default Nav;