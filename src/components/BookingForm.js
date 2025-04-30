import {useState} from "react";
import React from 'react';



const BookingForm = () => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);


    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert("reservation submitted")
        clearForm();
    }

    return(
        <form className="booking-form" onSubmit={handleSubmit}>
            <div>
                <input
                    type="radio"
                    className="radio-btn"
                    id="indoor"
                    name="seating"
                    value="indoor"
                />
                <label htmlFor="indoor" className="highlight-text gray-font">Indoor</label>
            </div>
            <div>
                <input
                    type="radio"
                    className="radio-btn"
                    id="outdoor"
                    name="seating"
                    value="outdoor"
                />
                <label htmlFor="outdoor" className="highlight-text gray-font">Outdoor</label>
            </div>
            <div>
                <label htmlFor="booking-date" className="highlight-text gray-font">Choose date</label>
                <input
                    type="date"
                    className="booking-input"
                    id="booking-date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="booking-time" className="highlight-text gray-font">Choose time</label>
                <select
                    className="booking-input"
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}

                >
                    {availableTimes.map((times) => {return <option>{times}</option>})}
                </select>
            </div>
            <div>
                <label htmlFor="guests" className="highlight-text gray-font">Number of guests</label>
                <input
                    type="number"
                    className="booking-input"
                    id="guests"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="occasion" className="highlight-text gray-font">Occasion</label>
                <select
                    className="booking-input"
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </div>

            <input type="submit" value="Make your reservation" className="button karla-descriptive-cta reservationbtn"/>
        </form>
    )
}

export default BookingForm;