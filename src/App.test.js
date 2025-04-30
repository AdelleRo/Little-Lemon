import { render, screen } from '@testing-library/react';
import ReservationPage from './components/ReservationPage';


test('Renders the booking form heading', () => {
  render (<ReservationPage/>);
  const headingElement = screen.getByText("Reservation");
  expect (headingElement).toBoInTheDocument();
})