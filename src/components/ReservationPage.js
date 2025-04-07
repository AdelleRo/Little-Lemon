import grilledfish from "../images/grilledfishgallery.jpg";
import restaurant from "../images/restaurantgallery.jpg";
import lemondessert from "../images/lemon dessert.jpg";
import BookingForm from "./BookingForm";

const Reservations = () => {
    return (
        <div className="reservation-page">
            <div className="reservation-form-container">
                <h1 className="markazi-display-title reservation-title">Reservation</h1>
                <BookingForm/>
            </div>
            <div className="gallery-and-btn">
                <div class="gallery">
                    <img src={grilledfish} className="gallery-image gallery-img-side" alt="gallery"/>
                    <img src={restaurant} className="gallery-image gallery-img-main" alt="gallery"/>
                    <img src={lemondessert} className="gallery-image gallery-img-side" alt="gallery"/>
                </div>
                {/* reserve a table button */}
            </div>
        </div>
    )
}

export default Reservations;