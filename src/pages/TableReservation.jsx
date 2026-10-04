import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Modal } from '../components/Modal';
import { AnimatedSection } from '../components/AnimatedSection';
import { FaCalendarAlt, FaClock, FaUserFriends, FaCheckCircle, FaUtensils, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export const TableReservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '2026-10-15',
    time: '19:30',
    guests: '2 Guests',
    preference: 'Indoor Dining (The Imperial Salon)',
    specialNotes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = 'TBL-' + Math.floor(1000 + Math.random() * 9000);
    setReservationCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '2026-10-15',
      time: '19:30',
      guests: '2 Guests',
      preference: 'Indoor Dining (The Imperial Salon)',
      specialNotes: ''
    });
  };

  return (
    <div className="page-transition" style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '6rem' }}>
      {/* Background Banner Hero */}
      <section
        className="position-relative py-5 text-center overflow-hidden"
        style={{
          backgroundColor: '#17130F',
          minHeight: '380px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          className="position-absolute inset-0 w-100 h-100 anim-hero-zoom"
          style={{
            backgroundImage: `url('/src/assets/images/vexmo_hero_pov_scene_1791082354397.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            filter: 'brightness(0.45) saturate(1.1)',
            zIndex: 1
          }}
        />

        <div className="container position-relative z-2 py-4">
          <AnimatedSection animation="fadeUp">
            <div className="luxury-subtitle mb-2" style={{ color: 'var(--light-gold)' }}>
              RESTAURANT & SALON DINING
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: 'var(--warm-white)', fontWeight: '600' }}>
              Reserve Your Table
            </h1>
            <p style={{ maxWidth: '580px', margin: '0 auto', color: '#D5CDC4', fontSize: '0.98rem', lineHeight: '1.8' }}>
              Allow our maître d' to prepare your evening with bespoke tableware, curated wine pairings, and personalized culinary arrangements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Reservation Form Section */}
      <div className="container position-relative z-3 px-3 px-sm-4" style={{ maxWidth: '840px', marginTop: '-30px' }}>
        <AnimatedSection animation="scaleIn">
          <div
            className="p-3 p-sm-4 p-md-5 rounded-1 shadow-lg"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-elevated)'
            }}
          >
            <div className="text-center mb-4 pb-2 border-bottom border-light">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', color: 'var(--dark)' }}>
                Table Reservation Request
              </h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', margin: 0 }}>
                Tables are held for 20 minutes past reservation time. Smart casual dress code observed.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="row g-3 g-md-4 mb-4">
                <div className="col-12 col-md-6">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lady Evelyn Montgomery"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="form-control"
                    style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaPhoneAlt className="me-1 text-gold" /> Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98200 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="form-control"
                    style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaEnvelope className="me-1 text-gold" /> Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="evelyn@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="form-control"
                    style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaUserFriends className="me-1 text-gold" /> Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="form-select"
                    style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6 Guests</option>
                    <option>8 Guests (Private Salon)</option>
                    <option>10+ Large Banquet</option>
                  </select>
                </div>

                <div className="col-12 col-md-6">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaCalendarAlt className="me-1 text-gold" /> Reservation Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="form-control"
                    style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaClock className="me-1 text-gold" /> Seating Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="form-select"
                    style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                  >
                    <option value="12:30">12:30 (Lunch Pass)</option>
                    <option value="13:45">13:45 (Afternoon Tasting)</option>
                    <option value="18:30">18:30 (Early Twilight)</option>
                    <option value="19:30">19:30 (Prime Chef Dinner)</option>
                    <option value="20:45">20:45 (Evening Tasting)</option>
                    <option value="22:00">22:00 (Late Night Hearth)</option>
                  </select>
                </div>

                <div className="col-12">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    <FaUtensils className="me-1 text-gold" /> Dining Preference
                  </label>
                  <div className="row g-2">
                    {[
                      'Indoor Dining (The Imperial Salon)',
                      'Outdoor Dining (The Hearth Terrace)',
                      'Private Dining (The Sommelier Vault)'
                    ].map((pref) => (
                      <div key={pref} className="col-12 col-md-4">
                        <div
                          onClick={() => setFormData({ ...formData, preference: pref })}
                          className="p-2.5 p-sm-3 rounded-1 cursor-pointer text-center"
                          style={{
                            border: formData.preference === pref ? '2px solid var(--gold)' : '1px solid var(--border)',
                            backgroundColor: formData.preference === pref ? 'var(--cream)' : '#FFFFFF',
                            fontSize: '0.8rem',
                            fontWeight: formData.preference === pref ? '600' : 'normal',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          {pref.split('(')[0]}
                          <span style={{ fontSize: '0.68rem', display: 'block', color: 'var(--muted)' }}>
                            ({pref.split('(')[1]}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-12">
                  <label style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--dark)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    Dietary Restrictions or Special Occasions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Vegetarian, celebrating 25th anniversary, wine pairing preference..."
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    className="form-control"
                    style={{ borderRadius: '2px', border: '1px solid var(--border)' }}
                  />
                </div>
              </div>

              <div className="text-center pt-2">
                <button type="submit" className="btn-gold py-3 px-5 shadow">
                  Reserve Table
                </button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isSubmitted}
        onClose={handleReset}
        title="Table Request Received"
      >
        <div className="text-center py-2">
          <div
            className="d-inline-flex align-items-center justify-content-center mb-3"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(201, 164, 92, 0.15)',
              color: 'var(--gold)',
              fontSize: '1.8rem'
            }}
          >
            <FaCheckCircle />
          </div>

          <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 'bold' }}>
            CONFIRMATION CODE #{reservationCode}
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--warm-white)', fontSize: '1.6rem', marginTop: '0.25rem' }}>
            Your Table Has Been Prepared
          </h3>

          <p style={{ color: '#D5CDC4', fontSize: '0.85rem', lineHeight: '1.7', maxWidth: '440px', margin: '0 auto 1.5rem auto' }}>
            Thank you, <strong>{formData.name}</strong>. Your table request for <strong>{formData.guests}</strong> on <strong>{formData.date} at {formData.time}</strong> has been received by our Maître d'hôtel.
          </p>

          <div className="p-3 rounded-1 mb-4 text-start" style={{ backgroundColor: 'var(--secondary-dark)', border: '1px solid rgba(201, 164, 92, 0.3)', fontSize: '0.8rem' }}>
            <div className="d-flex justify-content-between mb-1">
              <span className="text-muted">Dining Salon:</span>
              <span className="text-white">{formData.preference}</span>
            </div>
            <div className="d-flex justify-content-between mb-1">
              <span className="text-muted">Contact Phone:</span>
              <span className="text-white">{formData.phone}</span>
            </div>
            {formData.specialNotes && (
              <div className="d-flex justify-content-between">
                <span className="text-muted">Notes:</span>
                <span className="text-white">{formData.specialNotes}</span>
              </div>
            )}
          </div>

          <button onClick={handleReset} className="btn-gold px-4">
            Done & Return to Dining
          </button>
        </div>
      </Modal>
    </div>
  );
};
