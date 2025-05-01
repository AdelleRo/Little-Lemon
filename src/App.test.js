import { render, screen } from '@testing-library/react';
import ReservationPage from './components/ReservationPage';
import BookingForm from './components/BookingForm';
import {fetchAPI} from './APIfix';

test('Renders the booking form heading', () => {
  render (<ReservationPage/>);
  const headingElement = screen.getByText("Reservation");
  expect (headingElement).toBeInTheDocument();
})


describe("BookingForm intitializeTimes function", () => {
  it("should return a non-empty array", () => {
    const mockDate = new Date("2025-05-01");
    const result = fetchAPI(mockDate);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);

  })
})

describe("BookingForm updateTimes function", () => {
  it("should return the state values", () => {
    const mockDate = new Date("2025-05-01");
    const mockTime = ["17:00"]
    const result = fetchAPI(mockDate);

    expect(result.length).toBeGreaterThan(0);
  })
})
