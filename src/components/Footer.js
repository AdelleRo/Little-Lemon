import logofooter from '../images/logofooter.png'

const Footer = () =>{
    return(
        <footer>
            <img src={logofooter} alt="Little Lemon Logo"></img>
            <nav>
                <div>
                    <h3>DOORMAT NAVIGATION</h3>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>CONTACT</h3>
                    <ul>
                        <li><a href="">Address</a></li>
                        <li><a href="">Phone Number</a></li>
                        <li><a href="">Email</a></li>
                    </ul>
                </div>
                <div>
                    <h3>SOCIAL MEDIA</h3>
                    <ul>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;