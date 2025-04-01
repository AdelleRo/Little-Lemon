import "../App.css";
import logo from '../images/logo.svg';


const Nav = () => {
    return(
        <nav className="main-nav">
            <img src={logo} alt="Little Lemon Logo"></img>
            <input type="checkbox" id="main-menu-toggle" className="toggle-checkbox"></input>
            <label for="main-menu-toggle" className="main-menu-toggle-label">
                <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" fill="#495E57" class="bi bi-list menu-icon" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </label>
            <ul className="main-nav-list">
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