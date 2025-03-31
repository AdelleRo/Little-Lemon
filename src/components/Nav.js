import "../App.css";
import logo from '../images/logo.svg';


const Nav = () => {
    return(
        <nav className="main-nav">
            <img src={logo} alt="Little Lemon Logo"></img>
            <span class="material-symbols-outlined">menu</span>
            <ul>
                <li className="main-nav-link"><a href="">HOME</a></li>
                <li className="main-nav-link"><a href="">ABOUT</a></li>
                <li className="main-nav-link"><a href="">MENU</a></li>
                <li className="main-nav-link"><a href="">RESERVATIONS</a></li>
                <li className="main-nav-link"><a href="">ORDER ONLINE</a></li>
                <li className="main-nav-link"><a href="">LOGIN</a></li>
            </ul>
        </nav>
    )
}

export default Nav;