
const BookingForm = () => {
    return(
        <form className="booking-form">
            <label htmlFor="booking-date">Choose date</label>
            <input type="date" id="booking-date"/>
            <label htmlFor="booking-time">Choose time</label>
            <select id="booking-time">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" placeholder="1" min="1" max="10"/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
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