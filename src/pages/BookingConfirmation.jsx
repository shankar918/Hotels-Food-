import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaCheckCircle, FaPrint, FaCalendarAlt, FaUserFriends, FaBed, FaHome, FaUtensils } from 'react-icons/fa';

export const BookingConfirmation = () => {
  const location = useLocation();
  const state = location.state;

  const confirmationId = state?.confirmationId || 'VEX-849201';
  const room = state?.room || {
    name: 'Deluxe Garden Room',
    category: 'DELUXE ROOM',
    price: 6500,
    currency: '₹',
    bed: '1 King Bed',
    size: '420 sq.ft.'
  };
  const checkIn = state?.checkIn || '2026-10-15';
  const checkOut = state?.checkOut || '2026-10-18';
  const nights = state?.nights || 3;
  const guests = state?.guests || '2 Guests';
  const guestInfo = state?.guestInfo || {
    title: 'Mr.',
    firstName: 'Alexander',
    lastName: 'Sterling',
    email: 'alexander.sterling@example.com',
    phone: '+44 7911 123456'
  };
  const totals = state?.totals || {
    subtotal: 19500,
    serviceCharge: 975,
    luxuryTax: 2340,
    grandTotal: 22815
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '820px' }}>
        {/* Success Banner */}
        <div className="text-center mb-5 anim-fade-up">
          <div
            className="d-inline-flex align-items-center justify-content-center mb-3"
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(201, 164, 92, 0.15)',
              color: 'var(--gold)',
              fontSize: '2rem'
            }}
          >
            <FaCheckCircle />
          </div>

          <div className="luxury-subtitle mb-2">RESERVATION CONFIRMED</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--dark)', fontWeight: '600' }}>
            We Await Your Gracious Arrival
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: '540px', margin: '0 auto' }}>
            A formal royal confirmation has been dispatched to <strong>{guestInfo.email}</strong>. Please present this reference code upon arrival.
          </p>
        </div>

        {/* Official Voucher Card */}
        <div
          className="p-4 p-md-5 rounded-1 mb-4 shadow-sm"
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid var(--gold)',
            position: 'relative'
          }}
        >
          {/* Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center pb-4 border-bottom border-light mb-4 gap-3">
            <div>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 'bold' }}>
                RESERVATION LOCATOR
              </span>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: '700', color: 'var(--primary)', letterSpacing: '0.05em' }}>
                {confirmationId}
              </div>
            </div>

            <div className="text-md-end">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--dark)', fontWeight: '600' }}>
                VEXMO GRAND PALACE
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                14 Grand Boulevard, Mumbai 400001
              </div>
            </div>
          </div>

          {/* Guest and Stay Specifics */}
          <div className="row g-4 mb-4">
            <div className="col-12 col-md-6">
              <h5 style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '600' }}>
                Guest Details
              </h5>
              <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--dark)' }}>
                {guestInfo.title} {guestInfo.firstName} {guestInfo.lastName}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                {guestInfo.email}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                {guestInfo.phone}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <h5 style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '600' }}>
                Stay Schedule
              </h5>
              <div style={{ fontSize: '0.9rem', color: 'var(--dark)', fontWeight: '600' }}>
                Check-In: {checkIn} (from 14:00)
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--dark)', fontWeight: '600' }}>
                Check-Out: {checkOut} (until 12:00)
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                Duration: {nights} Night{nights > 1 ? 's' : ''} · {guests}
              </div>
            </div>
          </div>

          {/* Room Breakdown */}
          <div className="p-3 rounded-1 mb-4" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--dark)' }}>
                {room.name}
              </strong>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600' }}>
                {room.category}
              </span>
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
              {room.bed} · {room.size} · Breakfast Included
            </div>
          </div>

          {/* Financial Breakdown */}
          <div className="border-top border-light pt-3 mb-4">
            <div className="d-flex justify-content-between py-1" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
              <span>Room Subtotal ({nights} Nights)</span>
              <span>₹{totals.subtotal.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between py-1" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
              <span>Heritage Service Charge (5%)</span>
              <span>₹{totals.serviceCharge.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between py-1" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
              <span>Luxury Government Taxes (12%)</span>
              <span>₹{totals.luxuryTax.toLocaleString()}</span>
            </div>
            <div className="d-flex justify-content-between pt-2 border-top border-light" style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: '700', color: 'var(--dark)' }}>
              <span>Total Payable at Check-In</span>
              <span style={{ color: 'var(--primary)' }}>₹{totals.grandTotal.toLocaleString()}</span>
            </div>
          </div>

          {/* Important Arrival Notes */}
          <div className="p-3 bg-light rounded-1 text-muted" style={{ fontSize: '0.78rem', lineHeight: '1.6' }}>
            <strong>Arrival Privileges:</strong> Valet parking is complimentary for our suite guests. Should you require chauffeur pickup from Mumbai Chhatrapati Shivaji Maharaj International Airport, please contact the concierge at +91 22 8840 5000.
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
          <button onClick={handlePrint} className="btn-outline-gold">
            <FaPrint className="me-2" /> Print Confirmation Voucher
          </button>
          <div className="d-flex gap-2">
            <Link to="/table-reservation" className="btn-outline-gold">
              <FaUtensils className="me-1 text-gold" /> Reserve Dinner Table
            </Link>
            <Link to="/" className="btn-gold">
              <FaHome className="me-1" /> Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
