import {useState} from "react";
import { fetchAPI, submitAPI } from '../APIfix';
import { useNavigate } from "react-router-dom";
import React from 'react';


const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const navigate = useNavigate();

    let today = new Date();

    function updateTimes(){
        setAvailableTimes(fetchAPI(date))
    }

    function initializeTimes(){
        setAvailableTimes(fetchAPI(today));
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
        updateTimes();
    }

    function submitForm(formData){
        submitAPI(formData);
        if (submitAPI(formData) === true){
            navigate("/confirm-reservation", {replace: true});

        } else {
            alert("Error submitting form. Please try again.");
        }
    }

    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        clearForm();
        submitForm();
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
                    required ="required"
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
                    required ="required"
                />
                <label htmlFor="outdoor" className="highlight-text gray-font">Outdoor</label>
            </div>
            <div>
                <label htmlFor="booking-date" className="highlight-text gray-font">*Choose date</label>
                <input
                    type="date"
                    className="booking-input"
                    id="booking-date"
                    value={date}
                    onChange={handleDateChange}
                    required ="required"

                />
            </div>
            <div>
                <label htmlFor="booking-time" className="highlight-text gray-font">*Choose time</label>
                <select
                    className="booking-input"
                    id="booking-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required ="required"

                >
                    {availableTimes.map((times) => {return <option>{times}</option>})}
                </select>
            </div>
            <div>
                <label htmlFor="guests" className="highlight-text gray-font">*Number of guests</label>
                <input
                    type="number"
                    className="booking-input"
                    id="guests"
                    placeholder="1"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    required ="required"

                />
            </div>
            <div>
                <label htmlFor="occasion" className="highlight-text gray-font">*Occasion</label>
                <select
                    className="booking-input"
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    required ="required"
                >
                    <option>Birthday</option>
                    <option>Engagement</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </div>
            <input
                type="submit"
                value="Make your reservation"
                className="button karla-descriptive-cta reservationbtn"
            />

        </form>
    )
}

export default BookingForm;