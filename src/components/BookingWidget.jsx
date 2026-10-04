import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaUserFriends, FaBed, FaSearch } from 'react-icons/fa';

export const BookingWidget = ({ className = '', initialValues = {} }) => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState(initialValues.checkIn || '2026-10-15');
  const [checkOut, setCheckOut] = useState(initialValues.checkOut || '2026-10-18');
  const [guests, setGuests] = useState(initialValues.guests || '2 Guests');
  const [roomType, setRoomType] = useState(initialValues.roomType || 'ALL');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking', {
      state: {
        checkIn,
        checkOut,
        guests,
        roomType
      }
    });
  };

  return (
    <div className={`luxury-booking-widget ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-end">
          {/* Check-In */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="luxury-input-group">
              <label>
                <FaCalendarAlt className="me-1 text-gold" /> Check-In
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Check-Out */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="luxury-input-group">
              <label>
                <FaCalendarAlt className="me-1 text-gold" /> Check-Out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Guests */}
          <div className="col-12 col-md-6 col-lg-2">
            <div className="luxury-input-group">
              <label>
                <FaUserFriends className="me-1 text-gold" /> Guests
              </label>
              <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                <option value="1 Guest">1 Adult</option>
                <option value="2 Guests">2 Adults</option>
                <option value="3 Guests">3 Adults</option>
                <option value="4 Guests">4 Adults (Family)</option>
                <option value="6 Guests">6 Adults (Suite)</option>
              </select>
            </div>
          </div>

          {/* Room Category */}
          <div className="col-12 col-md-6 col-lg-2">
            <div className="luxury-input-group">
              <label>
                <FaBed className="me-1 text-gold" /> Room Category
              </label>
              <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                <option value="ALL">All Categories</option>
                <option value="DELUXE ROOM">Deluxe Room</option>
                <option value="PREMIUM ROOM">Premium Room</option>
                <option value="EXECUTIVE SUITE">Executive Suite</option>
                <option value="PRESIDENTIAL SUITE">Presidential Suite</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <div className="col-12 col-lg-2">
            <button
              type="submit"
              className="btn-gold w-100 justify-content-center text-nowrap py-3"
            >
              <FaSearch className="me-1" /> Check Rates
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
