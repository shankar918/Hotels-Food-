import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROOMS_DATA } from '../data/rooms';
import { SectionTitle } from '../components/SectionTitle';
import { FaCheck, FaCalendarAlt, FaUserFriends, FaBed, FaArrowRight, FaShieldAlt } from 'react-icons/fa';

export const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Initial params from route state or URL
  const queryParams = new URLSearchParams(location.search);
  const paramRoomId = queryParams.get('room') || location.state?.room || ROOMS_DATA[0].id;
  const paramCheckIn = location.state?.checkIn || '2026-10-15';
  const paramCheckOut = location.state?.checkOut || '2026-10-18';
  const paramGuests = location.state?.guests || '2 Guests';

  const [step, setStep] = useState(1);
  const [selectedRoomId, setSelectedRoomId] = useState(paramRoomId);
  const [checkIn, setCheckIn] = useState(paramCheckIn);
  const [checkOut, setCheckOut] = useState(paramCheckOut);
  const [guests, setGuests] = useState(paramGuests);

  // Guest details form state
  const [guestInfo, setGuestInfo] = useState({
    title: 'Mr.',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    flightNumber: '',
    agreeTerms: true
  });

  const selectedRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const d1 = new Date(checkIn);
  const d2 = new Date(checkOut);
  const nights = Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24))) || 3;

  const roomSubtotal = selectedRoom.price * nights;
  const serviceCharge = Math.round(roomSubtotal * 0.05);
  const luxuryTax = Math.round(roomSubtotal * 0.12);
  const grandTotal = roomSubtotal + serviceCharge + luxuryTax;

  const handleNextStep = (e) => {
    e?.preventDefault();
    if (step === 2) {
      if (!guestInfo.firstName || !guestInfo.lastName || !guestInfo.email || !guestInfo.phone) {
        alert('Please complete all required guest information fields.');
        return;
      }
    }
    setStep((prev) => Math.min(prev + 1, 3));
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const handleConfirmBooking = () => {
    const confirmationId = 'VEX-' + Math.floor(100000 + Math.random() * 900000);
    navigate('/booking-confirmation', {
      state: {
        confirmationId,
        room: selectedRoom,
        checkIn,
        checkOut,
        nights,
        guests,
        guestInfo,
        totals: {
          subtotal: roomSubtotal,
          serviceCharge,
          luxuryTax,
          grandTotal
        }
      }
    });
  };

  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <SectionTitle
            subtitle="INSTANT CONFIRMATION"
            title="Reserve Your Royal Experience"
            description="Complete your luxury reservation in three refined steps. Guaranteed best rate and flexible cancellation privileges."
          />
        </div>

        {/* Progress Steps Indicator */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="d-flex justify-content-between position-relative">
              {/* Progress Line */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  left: '12%',
                  right: '12%',
                  height: '2px',
                  backgroundColor: 'var(--border)',
                  zIndex: 1
                }}
              >
                <div
                  style={{
                    height: '100%',
                    backgroundColor: 'var(--gold)',
                    width: step === 1 ? '0%' : step === 2 ? '50%' : '100%',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>

              {[
                { num: 1, label: '01 SELECT ROOM', shortLabel: 'ROOM' },
                { num: 2, label: '02 GUEST DETAILS', shortLabel: 'GUESTS' },
                { num: 3, label: '03 REVIEW & CONFIRM', shortLabel: 'CONFIRM' }
              ].map((s) => (
                <div
                  key={s.num}
                  className="d-flex flex-column align-items-center position-relative"
                  style={{ zIndex: 2, cursor: 'pointer' }}
                  onClick={() => s.num < step && setStep(s.num)}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: step >= s.num ? 'var(--gold)' : 'var(--warm-white)',
                      border: `2px solid ${step >= s.num ? 'var(--gold)' : 'var(--border)'}`,
                      color: step >= s.num ? 'var(--dark)' : 'var(--muted)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      marginBottom: '0.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {step > s.num ? <FaCheck /> : s.num}
                  </div>
                  <span
                    className="text-center"
                    style={{
                      fontSize: '0.7rem',
                      letterSpacing: '0.1em',
                      fontWeight: '600',
                      color: step >= s.num ? 'var(--dark)' : 'var(--muted)'
                    }}
                  >
                    <span className="d-none d-sm-inline">{s.label}</span>
                    <span className="d-sm-none">{s.shortLabel}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Form Layout */}
        <div className="row g-5">
          {/* Main Step Content */}
          <div className="col-12 col-lg-8">
            {/* STEP 1: Select Room & Dates */}
            {step === 1 && (
              <div className="p-4 p-md-5 rounded-1 bg-white border border-light shadow-sm">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                  Step 1: Choose Your Room & Travel Dates
                </h3>

                <div className="row g-3 mb-4">
                  <div className="col-12 col-md-4">
                    <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      <FaCalendarAlt className="me-1 text-gold" /> Check-In
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="form-control"
                      style={{ borderRadius: '2px', border: '1px solid var(--border)' }}
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      <FaCalendarAlt className="me-1 text-gold" /> Check-Out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="form-control"
                      style={{ borderRadius: '2px', border: '1px solid var(--border)' }}
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <label style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: 'var(--muted)', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                      <FaUserFriends className="me-1 text-gold" /> Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="form-select"
                      style={{ borderRadius: '2px', border: '1px solid var(--border)' }}
                    >
                      <option value="1 Guest">1 Adult</option>
                      <option value="2 Guests">2 Adults</option>
                      <option value="3 Guests">3 Adults</option>
                      <option value="4 Guests">4 Adults</option>
                      <option value="6 Guests">6 Adults (Suite)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.12em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                    Select Suite
                  </label>
                  <div className="row g-3">
                    {ROOMS_DATA.map((r) => (
                      <div key={r.id} className="col-12 col-md-6">
                        <div
                          onClick={() => setSelectedRoomId(r.id)}
                          className="p-3 rounded-1 cursor-pointer"
                          style={{
                            border: selectedRoomId === r.id ? '2px solid var(--gold)' : '1px solid var(--border)',
                            backgroundColor: selectedRoomId === r.id ? 'var(--cream)' : '#FFFFFF',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <div className="d-flex gap-3 align-items-center">
                            <img
                              src={r.image}
                              alt={r.name}
                              style={{ width: '80px', height: '65px', objectFit: 'cover', borderRadius: '2px' }}
                            />
                            <div className="flex-grow-1">
                              <div style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--dark)' }}>
                                {r.name}
                              </div>
                              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                                {r.bed} · {r.size}
                              </div>
                              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--primary)', marginTop: '2px' }}>
                                {r.currency}{r.price.toLocaleString()} <span style={{ fontSize: '0.7rem', fontWeight: 'normal' }}>/ night</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <button onClick={handleNextStep} className="btn-gold py-2 px-4">
                    Continue to Guest Details <FaArrowRight className="ms-1" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Guest Details Form */}
            {step === 2 && (
              <form onSubmit={handleNextStep} className="p-4 p-md-5 rounded-1 bg-white border border-light shadow-sm">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                  Step 2: Guest Contact & Preferences
                </h3>

                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-2">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>Title</label>
                    <select
                      className="form-select"
                      value={guestInfo.title}
                      onChange={(e) => setGuestInfo({ ...guestInfo, title: e.target.value })}
                    >
                      <option>Mr.</option>
                      <option>Mrs.</option>
                      <option>Ms.</option>
                      <option>Dr.</option>
                      <option>Lord</option>
                    </select>
                  </div>
                  <div className="col-12 col-md-5">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander"
                      className="form-control"
                      value={guestInfo.firstName}
                      onChange={(e) => setGuestInfo({ ...guestInfo, firstName: e.target.value })}
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling"
                      className="form-control"
                      value={guestInfo.lastName}
                      onChange={(e) => setGuestInfo({ ...guestInfo, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-12 col-md-6">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      className="form-control"
                      value={guestInfo.email}
                      onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>Telephone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7911 123456"
                      className="form-control"
                      value={guestInfo.phone}
                      onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>Flight Arrival Number (Optional Chauffeur Tracking)</label>
                  <input
                    type="text"
                    placeholder="e.g. BA 198 or AI 131"
                    className="form-control"
                    value={guestInfo.flightNumber}
                    onChange={(e) => setGuestInfo({ ...guestInfo, flightNumber: e.target.value })}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>Special Requests & Dietary Preferences</label>
                  <textarea
                    rows={3}
                    placeholder="Pillow preference, anniversary celebration, allergies, late arrival notes..."
                    className="form-control"
                    value={guestInfo.specialRequests}
                    onChange={(e) => setGuestInfo({ ...guestInfo, specialRequests: e.target.value })}
                  />
                </div>

                <div className="d-flex justify-content-between">
                  <button type="button" onClick={() => setStep(1)} className="btn-outline-gold py-2 px-4">
                    Back to Room
                  </button>
                  <button type="submit" className="btn-gold py-2 px-4">
                    Review Reservation <FaArrowRight className="ms-1" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Review & Confirm */}
            {step === 3 && (
              <div className="p-4 p-md-5 rounded-1 bg-white border border-light shadow-sm">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                  Step 3: Review & Finalize Booking
                </h3>

                <div className="p-3 rounded-1 mb-4" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <div style={{ fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' }}>
                        Primary Guest
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--dark)' }}>
                        {guestInfo.title} {guestInfo.firstName} {guestInfo.lastName}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                        {guestInfo.email} · {guestInfo.phone}
                      </div>
                    </div>

                    <div className="col-12 col-md-6">
                      <div style={{ fontSize: '0.72rem', color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '600' }}>
                        Dates & Duration
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--dark)' }}>
                        {checkIn} to {checkOut} ({nights} Night{nights > 1 ? 's' : ''})
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                        {guests}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center gap-3 p-3 border border-light rounded-1">
                    <img
                      src={selectedRoom.image}
                      alt={selectedRoom.name}
                      style={{ width: '110px', height: '80px', objectFit: 'cover', borderRadius: '2px' }}
                    />
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', margin: 0 }}>
                        {selectedRoom.name}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', margin: 0 }}>
                        {selectedRoom.bed} · {selectedRoom.size} · Breakfast Included
                      </p>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gold)', marginTop: '2px' }}>
                        Free Cancellation until 48 hours prior to check-in
                      </div>
                    </div>
                  </div>
                </div>

                {guestInfo.specialRequests && (
                  <div className="mb-4 p-3 bg-light rounded-1 text-muted" style={{ fontSize: '0.82rem' }}>
                    <strong>Special Requests:</strong> {guestInfo.specialRequests}
                  </div>
                )}

                <div className="p-3 mb-4 rounded-1" style={{ backgroundColor: '#F9F7F2', border: '1px solid var(--border)', fontSize: '0.78rem', color: 'var(--muted)' }}>
                  <FaShieldAlt className="me-1 text-gold" />
                  <strong>Guaranteed Reservation:</strong> You will not be charged now. Payment is collected upon check-in at the Grand Palace Reception.
                </div>

                <div className="d-flex justify-content-between">
                  <button onClick={() => setStep(2)} className="btn-outline-gold py-2 px-4">
                    Modify Details
                  </button>
                  <button onClick={handleConfirmBooking} className="btn-gold py-3 px-4 shadow">
                    Confirm & Receive Voucher
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Summary Sidebar */}
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
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--warm-white)', marginBottom: '1rem', borderBottom: '1px solid rgba(201, 164, 92, 0.3)', paddingBottom: '0.75rem' }}>
                Booking Summary
              </h4>

              <div className="mb-3">
                <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--warm-white)' }}>
                  {selectedRoom.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--light-gold)' }}>
                  {selectedRoom.category}
                </div>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom border-secondary" style={{ fontSize: '0.82rem' }}>
                <span>Duration</span>
                <span>{nights} Night{nights > 1 ? 's' : ''}</span>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom border-secondary" style={{ fontSize: '0.82rem' }}>
                <span>Guests</span>
                <span>{guests}</span>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom border-secondary" style={{ fontSize: '0.82rem' }}>
                <span>Room Rate ({nights} × ₹{selectedRoom.price.toLocaleString()})</span>
                <span>₹{roomSubtotal.toLocaleString()}</span>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom border-secondary" style={{ fontSize: '0.82rem' }}>
                <span>Heritage Service (5%)</span>
                <span>₹{serviceCharge.toLocaleString()}</span>
              </div>

              <div className="d-flex justify-content-between py-2 border-bottom border-secondary" style={{ fontSize: '0.82rem' }}>
                <span>Government Taxes (12%)</span>
                <span>₹{luxuryTax.toLocaleString()}</span>
              </div>

              <div className="d-flex justify-content-between pt-3 mb-3" style={{ fontSize: '1.2rem', fontFamily: 'var(--font-serif)', fontWeight: '700', color: 'var(--gold)' }}>
                <span>Total Amount</span>
                <span>₹{grandTotal.toLocaleString()}</span>
              </div>

              <div style={{ fontSize: '0.72rem', color: '#B5ADA4', textAlign: 'center' }}>
                All taxes and champagne breakfast included.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
