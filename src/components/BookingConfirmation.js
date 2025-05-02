import {useState} from "react";
import { useNavigate } from "react-router-dom";
import pasta from "../images/pasta.jpg";
import foodgallery from "../images/foodgallery.jpg";
import bruschetta from "../images/bruschetta.jpg";

const BookingConfirmation = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const navigate = useNavigate();

    const clearForm = () => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhonenumber("");
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        clearForm();
        alert("Reservation confirmed!");
        navigate("/");
    }

    return (
        <div className="reservation-page">
            <div className="reservation-form-container">
                <h1 className="markazi-display-title reservation-title">Confirm Reservation</h1>
                <form className="booking-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstname" className="highlight-text gray-font">*First name</label>
                        <input
                            type="text"
                            className="booking-input"
                            id="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required ="required"
                            minLength={2}
                            placeholder="First name"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastname" className="highlight-text gray-font">*Last name</label>
                        <input
                            type="text"
                            className="booking-input"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required ="required"
                            minLength={2}
                            placeholder="Last name"

                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="highlight-text gray-font">*Email</label>
                        <input
                            type="email"
                            className="booking-input"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required ="required"
                            placeholder="Email"

                        />
                    </div>
                    <div>
                        <label htmlFor="phonenumber" className="highlight-text gray-font">*Phone number</label>
                        <input
                            type="tel"
                            className="booking-input"
                            id="phonenumber"
                            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                            value={phonenumber}
                            onChange={(e) => setPhonenumber(e.target.value)}
                            required ="required"
                            placeholder="xxx xxx xxxx"

                        />
                    </div>
                    <input
                        type="submit"
                        value="Confirm your reservation"
                        className="button karla-descriptive-cta reservationbtn"
                    />
                </form>
            </div>
            <div className="gallery-and-btn">
                <div class="gallery">
                    <img src={pasta} className="gallery-image gallery-img-side" alt="gallery"/>
                    <img src={foodgallery} className="gallery-image gallery-img-main" alt="gallery"/>
                    <img src={bruschetta} className="gallery-image gallery-img-side" alt="gallery"/>
                </div>
                {/* reserve a table button */}
            </div>
        </div>
    )
}

export default BookingConfirmation;