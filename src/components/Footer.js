import "../App.css";
import {Link} from "react-router-dom";
import logofooter from '../images/logofooter.png';

const Footer = () =>{
    return(
        <footer className="footer">
            <img src={logofooter} alt="Little Lemon Logo" className="footer-logo"></img>
            <nav className="footer-nav">
                <div className="footer-nav-div">
                    <h3 className="karla-section-title">DOORMAT NAVIGATION</h3>
                    <div className="footer-links-list">
                        <Link to="/" className="footer-link karla-descriptive-cta">Home</Link><br/>
                        <Link to="/#about-section" className="footer-link karla-descriptive-cta">About</Link><br/>
                        <Link to="menu" className="footer-link karla-descriptive-cta">Menu</Link><br/>
                        <Link to="reservations" className="footer-link karla-descriptive-cta">Reservations</Link><br/>
                        <Link to="order-online" className="footer-link karla-descriptive-cta">Order Online</Link><br/>
                        <Link to="login" className="footer-link karla-descriptive-cta">Login</Link>
                    </div>
                </div>
                <div className="footer-nav-div">
                    <h3 className="karla-section-title">CONTACT</h3>
                    <ul className="footer-links-list">
                        <li><a href="https://maps.app.goo.gl/wA2y7rqTqmeWtbaW7" className="footer-link karla-descriptive-cta">Chicago address</a></li>
                        <li><a href="/" className="footer-link karla-descriptive-cta">Phone number</a></li>
                        <li><a href="https://mail.google.com/mail?" className="footer-link karla-descriptive-cta">Email</a></li>
                    </ul>
                </div>
                <div className="footer-nav-div">
                    <h3 className="karla-section-title">SOCIAL MEDIA</h3>
                    <ul className="footer-links-list">
                        <li><a href="https://www.instagram.com/" className="footer-link karla-descriptive-cta">Instagram</a></li>
                        <li><a href="https://www.facebook.com/" className="footer-link karla-descriptive-cta">Facebook</a></li>
                        <li><a href="https://twitter.com/" className="footer-link karla-descriptive-cta">Twitter</a></li>
                        <li><a href="https://www.youtube.com/" className="footer-link karla-descriptive-cta">Youtube</a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;