import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import ReservationPage from './components/ReservationPage';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import {fetchAPI} from './APIfix';

test('Renders the booking form heading', () => {
  render (<ReservationPage/>);
  const headingElement = screen.getByText("Reservation");
  expect (headingElement).toBeInTheDocument();
})

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));


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


describe("BookingConfirmation component", () => {
  it("should validate the form inputs", () => {
    const mockNavigate = jest.fn(); // Mock navigate function
    useNavigate.mockReturnValue(mockNavigate); // Mock useNavigate to return the mock function

    render(<BookingConfirmation />);
    const firstNameInput = screen.getByLabelText(/First name/i);
    const lastNameInput = screen.getByLabelText(/Last name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const phoneNumberInput = screen.getByLabelText(/Phone number/);

    fireEvent.change(firstNameInput, {target:{value: "Amy"}});
    expect(firstNameInput.value.length).toBeGreaterThan(2);
    fireEvent.change(firstNameInput, {target:{value: "L"}});
    expect(firstNameInput.value.length).toBeLessThan(2);

    fireEvent.change(lastNameInput, {target: {value: "Meyer"}});
    expect(lastNameInput.value.length).toBeGreaterThan(2);
    fireEvent.change(lastNameInput, {target: {value: "X"}});
    expect(lastNameInput.value.length).toBeLessThan(2);

    fireEvent.change(emailInput, {target: {value: "amy@gmail.com"}});
    expect(emailInput.value).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    fireEvent.change(emailInput, {target: {value: "john@mail"}});
    expect(emailInput.value).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    fireEvent.change(phoneNumberInput, {target: {value: "000 000 0000"}});
    expect(phoneNumberInput.value).toMatch(/^\d{3} \d{3} \d{4}$/);
    fireEvent.change(phoneNumberInput, {target: {value: "0092998"}});
    expect(phoneNumberInput.value).not.toMatch(/^\d{3} \d{3} \d{4}$/);

    // Ensure navigate is not called during validation
    expect(mockNavigate).not.toHaveBeenCalled();

  })
})