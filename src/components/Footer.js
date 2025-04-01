import "../App.css";
import logofooter from '../images/logofooter.png';

const Footer = () =>{
    return(
        <footer className="footer">
            <img src={logofooter} alt="Little Lemon Logo" className="footer-logo"></img>
            <nav className="footer-nav">
                <div className="footer-nav-div">
                    <h3>DOORMAT NAVIGATION</h3>
                    <ul className="footer-links-list">
                        <li><a href="" className="footer-link">Home</a></li>
                        <li><a href="" className="footer-link">About</a></li>
                        <li><a href="" className="footer-link">Menu</a></li>
                        <li><a href="" className="footer-link">Reservations</a></li>
                        <li><a href="" className="footer-link">Order Online</a></li>
                        <li><a href="" className="footer-link">Login</a></li>
                    </ul>
                </div>
                <div className="footer-nav-div">
                    <h3>CONTACT</h3>
                    <ul className="footer-links-list">
                        <li><a href="" className="footer-link">Address</a></li>
                        <li><a href="" className="footer-link">Phone Number</a></li>
                        <li><a href="" className="footer-link">Email</a></li>
                    </ul>
                </div>
                <div className="footer-nav-div">
                    <h3>SOCIAL MEDIA</h3>
                    <ul className="footer-links-list">
                        <li><a href="" className="footer-link">Instagram</a></li>
                        <li><a href="" className="footer-link">Facebook</a></li>
                        <li><a href="" className="footer-link">Twitter</a></li>
                        <li><a href="" className="footer-link">Youtube</a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;