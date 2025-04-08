import {useState} from "react";
import React from 'react';


const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

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
            <label htmlFor="booking-date">Choose date</label>
            <input
                type="date"
                id="booking-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="booking-time">Choose time</label>
            <select id="booking-time"
                value={time}
                onChange={(e) => {setTime(e.target.value)}}
            >
                {availableTimes.map((time, index) => {return(<option key={index}>{time}</option>)})}

            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Engagement</option>
                <option>Anniversary</option>
                <option>Other</option>
            </select>
            <input type="submit" value="Make your reservation"/>
        </form>
    )
}

export default BookingForm;