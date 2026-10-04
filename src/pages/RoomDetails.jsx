import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ROOMS_DATA } from '../data/rooms';
import { RoomCard } from '../components/RoomCard';
import {
  FaWifi,
  FaBed,
  FaTv,
  FaWineGlassAlt,
  FaUtensils,
  FaCoffee,
  FaParking,
  FaSnowflake,
  FaCheck,
  FaCalendarAlt,
  FaUserFriends,
  FaArrowLeft,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';

export const RoomDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = ROOMS_DATA.find((r) => r.id === id) || ROOMS_DATA[0];

  const [checkIn, setCheckIn] = useState('2026-10-15');
  const [checkOut, setCheckOut] = useState('2026-10-18');
  const [guestCount, setGuestCount] = useState(room.guests);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Gallery of views for this room
  const galleryImages = [
    room.image,
    '/src/assets/images/luxury_hotel_lobby_1791083064391.jpg',
    '/src/assets/images/luxury_hotel_pool_spa_1791083075058.jpg'
  ];

  const facilityIcons = {
    'Wi-Fi': <FaWifi />,
    'King Bed': <FaBed />,
    'Air Conditioning': <FaSnowflake />,
    'Smart TV': <FaTv />,
    'Mini Bar': <FaWineGlassAlt />,
    'Room Service': <FaUtensils />,
    'Breakfast': <FaCoffee />,
    'Parking': <FaParking />
  };

  const similarRooms = ROOMS_DATA.filter((r) => r.id !== room.id).slice(0, 3);

  const handleBookNow = (e) => {
    e.preventDefault();
    navigate('/booking', {
      state: {
        room: room.id,
        checkIn,
        checkOut,
        guests: `${guestCount} Guests`
      }
    });
  };

  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Breadcrumb / Back Link */}
        <div className="mb-4">
          <Link to="/rooms" className="luxury-link d-inline-flex align-items-center gap-2">
            <FaArrowLeft style={{ fontSize: '0.75rem' }} /> Back to All Rooms
          </Link>
        </div>

        {/* Room Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 border-bottom border-light pb-4">
          <div>
            <div className="luxury-subtitle mb-2">{room.category}</div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', margin: 0, fontWeight: '600' }}>
              {room.name}
            </h1>
          </div>
          <div className="mt-3 mt-md-0 text-md-end">
            <span style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>Starting from</span>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: '700', color: 'var(--primary)' }}>
              {room.currency}{room.price.toLocaleString()} <span style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 'normal' }}>/ Night</span>
            </div>
          </div>
        </div>

        {/* Gallery Hero */}
        <div className="row g-4 mb-5">
          <div className="col-12 col-lg-8">
            <div className="overflow-hidden rounded-1 mb-2" style={{ maxHeight: '460px' }}>
              <img
                src={galleryImages[activeImageIndex]}
                alt={room.name}
                className="w-100 h-100 object-fit-cover"
                style={{ height: '460px' }}
              />
            </div>
            {/* Thumbnails */}
            <div className="d-flex gap-2">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className="cursor-pointer rounded-1 overflow-hidden"
                  style={{
                    width: '100px',
                    height: '65px',
                    border: activeImageIndex === idx ? '2px solid var(--gold)' : '1px solid var(--border)',
                    opacity: activeImageIndex === idx ? 1 : 0.6,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <img src={img} alt="Thumbnail" className="w-100 h-100 object-fit-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Booking Card */}
          <div className="col-12 col-lg-4">
            <div
              className="p-4 rounded-1 sticky-top"
              style={{
                backgroundColor: 'var(--dark)',
                color: 'var(--warm-white)',
                border: '1px solid rgba(201, 164, 92, 0.35)',
                boxShadow: 'var(--shadow-elevated)',
                top: '90px'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--warm-white)' }}>
                Reserve This Suite
              </h3>

              <form onSubmit={handleBookNow}>
                <div className="mb-3">
                  <label style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaCalendarAlt className="me-1" /> Check-In Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(201, 164, 92, 0.3)',
                      color: 'var(--warm-white)',
                      width: '100%',
                      padding: '0.6rem 0.8rem',
                      fontSize: '0.85rem',
                      outline: 'none',
                      borderRadius: '2px'
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaCalendarAlt className="me-1" /> Check-Out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(201, 164, 92, 0.3)',
                      color: 'var(--warm-white)',
                      width: '100%',
                      padding: '0.6rem 0.8rem',
                      fontSize: '0.85rem',
                      outline: 'none',
                      borderRadius: '2px'
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label style={{ fontSize: '0.68rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaUserFriends className="me-1" /> Number of Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    style={{
                      backgroundColor: 'var(--secondary-dark)',
                      border: '1px solid rgba(201, 164, 92, 0.3)',
                      color: 'var(--warm-white)',
                      width: '100%',
                      padding: '0.6rem 0.8rem',
                      fontSize: '0.85rem',
                      outline: 'none',
                      borderRadius: '2px'
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} Guest{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn-gold w-100 justify-content-center py-3">
                  Book This Room
                </button>
              </form>

              <div className="mt-3 pt-3 border-top border-secondary text-center" style={{ fontSize: '0.72rem', color: '#B5ADA4' }}>
                <FaShieldAlt className="me-1 text-gold" /> Best Rate Guaranteed · No Instant Card Charge
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections: Description, Facilities, Amenities, Rules */}
        <div className="row g-5">
          <div className="col-12 col-lg-8">
            {/* Description */}
            <div className="mb-5">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '1rem' }}>
                Suite Overview
              </h3>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.8', color: 'var(--muted)' }}>
                {room.fullDesc}
              </p>
            </div>

            {/* Facilities Grid */}
            <div className="mb-5 p-4 rounded-1" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                Signature Facilities Included
              </h3>
              <div className="row g-3">
                {room.facilities.map((fac, idx) => (
                  <div key={idx} className="col-6 col-md-3">
                    <div className="d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: 'var(--text)' }}>
                      <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>
                        {facilityIcons[fac] || <FaCheck />}
                      </span>
                      <span>{fac}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities List */}
            <div className="mb-5">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1rem' }}>
                Luxury In-Room Amenities
              </h3>
              <div className="row g-2">
                {room.amenities.map((item, idx) => (
                  <div key={idx} className="col-12 col-md-6">
                    <div className="d-flex align-items-center gap-2" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                      <FaCheck style={{ color: 'var(--gold)', fontSize: '0.75rem' }} />
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules & Cancellation */}
            <div className="row g-4 pt-4 border-top border-light">
              <div className="col-12 col-md-6">
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  <FaClock className="me-2 text-gold" /> House Rules
                </h4>
                <ul className="list-unstyled" style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: '1.8' }}>
                  {room.houseRules.map((rule, idx) => (
                    <li key={idx}>• {rule}</li>
                  ))}
                </ul>
              </div>

              <div className="col-12 col-md-6">
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  <FaShieldAlt className="me-2 text-gold" /> Cancellation Policy
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: '1.8' }}>
                  {room.cancellation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Rooms */}
        <div className="mt-5 pt-5 border-top border-light">
          <SectionTitle
            subtitle="EXPLORE OTHER SUITES"
            title="Similar Accommodations"
            align="start"
          />
          <div className="row g-4">
            {similarRooms.map((simRoom) => (
              <div key={simRoom.id} className="col-12 col-md-4">
                <RoomCard room={simRoom} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
