import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { AnimatedSection } from '../components/AnimatedSection';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiries',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Inquiries',
      message: ''
    });
  };

  return (
    <div className="page-transition" style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        <AnimatedSection animation="fadeUp">
          <div className="text-center mb-5">
            <SectionTitle
              subtitle="CONNECT WITH US"
              title="The Royal Concierge Desk"
              description="Whether coordinating a wedding in our ballroom, arranging helicopter transfers, or tailoring dietary requirements, our dedicated staff is at your service."
            />
          </div>
        </AnimatedSection>

        <div className="row g-4 g-lg-5">
          {/* Contact Details Card */}
          <div className="col-12 col-lg-5">
            <AnimatedSection animation="fadeRight">
              <div
                className="p-4 p-md-5 rounded-1 h-100"
                style={{
                  backgroundColor: 'var(--dark)',
                  color: 'var(--warm-white)',
                  border: '1px solid rgba(201, 164, 92, 0.35)',
                  boxShadow: 'var(--shadow-elevated)'
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--warm-white)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(201, 164, 92, 0.3)', paddingBottom: '0.75rem' }}>
                  Direct Contact Points
                </h3>

                <div className="d-flex flex-column gap-4" style={{ fontSize: '0.9rem' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '2px',
                        backgroundColor: 'rgba(201, 164, 92, 0.15)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--warm-white)', display: 'block', marginBottom: '2px' }}>Palace Address</strong>
                      <div style={{ color: '#D5CDC4', fontSize: '0.85rem', lineHeight: '1.6' }}>
                        14 Grand Boulevard, Royal Heritage Quarter, Mumbai 400001, Maharashtra, India
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '2px',
                        backgroundColor: 'rgba(201, 164, 92, 0.15)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--warm-white)', display: 'block', marginBottom: '2px' }}>Direct Phone Lines</strong>
                      <div style={{ color: '#D5CDC4', fontSize: '0.85rem' }}>
                        Reservations: +91 22 8840 5000<br />
                        Concierge: +91 22 8840 5001<br />
                        Dining Pass: +91 22 8840 5008
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '2px',
                        backgroundColor: 'rgba(201, 164, 92, 0.15)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <FaEnvelope />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--warm-white)', display: 'block', marginBottom: '2px' }}>Electronic Correspondence</strong>
                      <div style={{ color: '#D5CDC4', fontSize: '0.85rem' }}>
                        concierge@vexmopalace.com<br />
                        reservations@vexmopalace.com
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-start gap-3">
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '2px',
                        backgroundColor: 'rgba(201, 164, 92, 0.15)',
                        color: 'var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <FaClock />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--warm-white)', display: 'block', marginBottom: '2px' }}>Operating Hours</strong>
                      <div style={{ color: '#D5CDC4', fontSize: '0.85rem' }}>
                        Hotel Reception: 24 Hours / 7 Days<br />
                        Fine Dining Salon: 12:00 – 00:00 Daily<br />
                        Thermal Spa: 06:00 – 22:00 Daily
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Message Form */}
          <div className="col-12 col-lg-7">
            <AnimatedSection animation="fadeLeft">
              <div className="p-4 p-md-5 rounded-1 bg-white border border-light shadow-sm">
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.45rem', marginBottom: '1.5rem' }}>
                  Send a Message to the Concierge
                </h3>

                {submitted ? (
                  <div className="text-center py-5">
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
                    <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--dark)' }}>
                      Message Transmitted
                    </h4>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                      Thank you, <strong>{formData.name}</strong>. Your correspondence has been directed to the Head Concierge. An executive response will be sent to <strong>{formData.email}</strong> within 4 hours.
                    </p>
                    <button onClick={handleReset} className="btn-gold">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Lord Charles Harrington"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="form-control"
                          style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="charles@harrington.co.uk"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="form-control"
                          style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                          Telephone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+44 20 7946 0192"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="form-control"
                          style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                          Subject Matter
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="form-select"
                          style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                        >
                          <option>General Inquiries</option>
                          <option>Room & Suite Reservations</option>
                          <option>Private Dining & Banquet Hall</option>
                          <option>Weddings & Galas</option>
                          <option>Chauffeur & Airport Pickup</option>
                          <option>Press & Media Relations</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                        Message or Inquiry Specifics *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Please convey how our concierge brigade may assist you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-control"
                        style={{ borderRadius: '2px', border: '1px solid var(--border)', padding: '0.65rem 0.8rem' }}
                      />
                    </div>

                    <button type="submit" className="btn-gold py-3 px-5">
                      <FaPaperPlane className="me-2" /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};
