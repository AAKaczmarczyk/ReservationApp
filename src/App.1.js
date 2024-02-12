// Importowanie niezbędnych modułów
import React, { useState } from 'react';
import "./App.css";

// Główny komponent aplikacji
function App() {
  // Stan komponentu przechowujący informacje o rezerwacjach
  const [reservations, setReservations] = useState([]);

  // Funkcja do obsługi rezerwacji
  const handleReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <div>
      <h1>Rezerwacja stolików w restauracji</h1>
      <ReservationForm onReservation={handleReservation} />
      <ReservationList reservations={reservations} />
    </div>
  );
}

// Komponent formularza rezerwacji
function ReservationForm({ onReservation }) {
  // Stan komponentu przechowujący dane wprowadzone w formularzu
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 0,
  });

  // Funkcja do obsługi zmiany wartości w formularzu
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Funkcja do obsługi wysłania formularza
  const handleSubmit = (e) => {
    e.preventDefault();
    onReservation(formData);
    setFormData({ date: '', time: '', guests: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Data:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </label>
      <label>
        Godzina:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
      </label>
      <label>
        Liczba gości:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Zarezerwuj</button>
    </form>
  );
}

// Komponent listy zarezerwowanych stolików
function ReservationList({ reservations }) {
  return (
    <div>
      <h2>Lista zarezerwowanych stolików</h2>
      {reservations.map((reservation, index) => (
        <div key={index}>
          <p>Data: {reservation.date}</p>
          <p>Godzina: {reservation.time}</p>
          <p>Liczba gości: {reservation.guests}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
