import "../App.css";
import logo from '../images/logo.svg';
import React from 'react';
import {Link, Route, Routes} from "react-router-dom";


const Nav = () => {
    return(
        <div className="main-navbar">
            <img src={logo} alt="Little Lemon Logo"></img>
            <input type="checkbox" id="main-menu-toggle" className="toggle-checkbox"></input>
            <label for="main-menu-toggle" className="main-menu-toggle-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" fill="#495E57" class="bi bi-list menu-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </label>
            <nav className="main-nav-links">
                <Link to="/" className="main-nav-link-item">Home</Link>
                <Link to="/" className="main-nav-link-item">About</Link>
                <Link to="/" className="main-nav-link-item">Menu</Link>
                <Link to="/" className="main-nav-link-item">Reservations</Link>
                <Link to="/" className="main-nav-link-item">Order Online</Link>
                <Link to="/" className="main-nav-link-item">Login</Link>
            </nav>
        </div>
    )
}

export default Nav;