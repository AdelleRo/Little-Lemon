import {Link} from "react-router-dom";
import About from "./About";
import restaurantfood from "../images/restaurantfood.jpg";
import greeksalad from "../images/greek-salad.jpg";
import delivery from "../images/delivery.png";

const Homepage = () => {
    return (
        <>
            <header className="hero-section-homepage">
                <div className="hero-text-homepage">
                    <h1 className="markazi-display-title">Little Lemon</h1>
                    <h2 className="markazi-subtitle gray-font">Chicago</h2>
                    <p className="karla-descriptive-cta gray-font hero-p">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <br/>
                    <Link to="reservations" className="button karla-descriptive-cta">Reserve a table</Link>
                </div>
                <img src={restaurantfood} className="restaurant-food-hero-img" alt="restaurant food on the header section"/>
            </header>
            <div className="specials">
                <div className="specials-text">
                    <h2 className="markazi-subtitle black-font">Specials</h2>
                    <Link to="menu" className="button karla-descriptive-cta">Online Menu</Link>
                </div>
                <div className="specials-cards-container">
                    <div className="specials-card black-font">
                        <img src={greeksalad} className="specials-card-img" alt="Greek Salad"/>
                        <div className="specials-card-info">
                            <div className="specials-card-heading">
                                <h4 className="card-title">Greek Salad</h4>
                                <h4 className="highlight-text red-font">$12.99</h4>
                            </div>
                            <p className="card-dish-p karla-p-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                            <p className="highlight-text">Order a delivery <span><img src={delivery} alt="delivery"/></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials">

            </div>
            <About id="about-section"/>
        </>

    )
}

export default Homepage;