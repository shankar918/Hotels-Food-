import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--dark)',
        color: '#D5CDC4',
        borderTop: '1px solid rgba(201, 164, 92, 0.25)',
        paddingTop: '5rem',
        paddingBottom: '2.5rem'
      }}
    >
      <div className="container">
        <div className="row g-5 mb-5">
          {/* Col 1: Brand & Bio */}
          <div className="col-12 col-lg-4">
            <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3">
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  border: '1px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '2px',
                  backgroundColor: 'rgba(201, 164, 92, 0.12)'
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    color: 'var(--gold)',
                    fontWeight: '700'
                  }}
                >
                  V
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.25rem',
                    letterSpacing: '0.22em',
                    color: 'var(--warm-white)',
                    fontWeight: '700',
                    display: 'block',
                    lineHeight: 1
                  }}
                >
                  VEXMO
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.35em',
                    color: 'var(--gold)',
                    textTransform: 'uppercase',
                    display: 'block',
                    lineHeight: 1.4,
                    fontWeight: '500'
                  }}
                >
                  GRAND PALACE
                </span>
              </div>
            </Link>

            <p style={{ fontSize: '0.85rem', color: '#B5ADA4', lineHeight: '1.8', maxWidth: '340px' }}>
              Where classical architectural grandeur meets contemporary luxury hospitality, Michelin-grade gastronomy, and bespoke service.
            </p>

            <div className="d-flex gap-3 mt-4" style={{ fontSize: '0.78rem', color: 'var(--gold)' }}>
              <span>★★★★★ 5-Star Luxury Heritage</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h5
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: 'var(--warm-white)',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em'
              }}
            >
              Navigation
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: '0.82rem' }}>
              <li><Link to="/" className="text-decoration-none text-light opacity-75 hover-opacity-100">Home</Link></li>
              <li><Link to="/rooms" className="text-decoration-none text-light opacity-75 hover-opacity-100">Rooms & Suites</Link></li>
              <li><Link to="/dining" className="text-decoration-none text-light opacity-75 hover-opacity-100">Fine Dining</Link></li>
              <li><Link to="/menu" className="text-decoration-none text-light opacity-75 hover-opacity-100">Restaurant Menu</Link></li>
              <li><Link to="/offers" className="text-decoration-none text-light opacity-75 hover-opacity-100">Offers & Packages</Link></li>
              <li><Link to="/gallery" className="text-decoration-none text-light opacity-75 hover-opacity-100">Visual Gallery</Link></li>
              <li><Link to="/about" className="text-decoration-none text-light opacity-75 hover-opacity-100">About Our Story</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light opacity-75 hover-opacity-100">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="col-6 col-md-4 col-lg-3">
            <h5
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: 'var(--warm-white)',
                marginBottom: '1.5rem',
                letterSpacing: '0.05em'
              }}
            >
              Concierge Desk
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-3" style={{ fontSize: '0.82rem', color: '#B5ADA4' }}>
              <li className="d-flex align-items-start gap-2">
                <FaMapMarkerAlt style={{ color: 'var(--gold)', marginTop: '4px', flexShrink: 0 }} />
                <span>14 Grand Boulevard, Royal Heritage Quarter, Mumbai 400001</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaPhoneAlt style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span>+91 22 8840 5000</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <FaEnvelope style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span>concierge@vexmopalace.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="col-12 col-md-5 col-lg-3">
            <h5
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.05rem',
                color: 'var(--warm-white)',
                marginBottom: '0.75rem',
                letterSpacing: '0.05em'
              }}
            >
              Stay in the Know
            </h5>
            <p style={{ fontSize: '0.8rem', color: '#B5ADA4', marginBottom: '1rem', lineHeight: '1.6' }}>
              Receive privileged access to seasonal suites, private chef tastings, and exclusive offers.
            </p>

            <form onSubmit={handleSubscribe}>
              <div className="input-group mb-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(201, 164, 92, 0.3)',
                    color: 'var(--warm-white)',
                    fontSize: '0.8rem',
                    padding: '0.65rem 0.9rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  className="btn-gold px-3"
                  style={{ fontSize: '0.72rem', borderRadius: '0 2px 2px 0' }}
                >
                  <FaArrowRight />
                </button>
              </div>
              {subscribed && (
                <div style={{ fontSize: '0.72rem', color: '#C9A45C' }}>
                  <FaCheck className="me-1" /> Thank you for subscribing to VEXMO Privileges.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-4 mt-4 border-top d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
          style={{ borderColor: 'rgba(222, 213, 199, 0.1)', fontSize: '0.75rem', color: '#8F867C' }}
        >
          <div>
            © 2026 VEXMO Grand Palace Hotel & Residences. All Rights Reserved.
          </div>
          <div className="d-flex gap-4">
            <span className="cursor-pointer">Privacy Charter</span>
            <span>·</span>
            <span className="cursor-pointer">Terms of Stay</span>
            <span>·</span>
            <span className="cursor-pointer">Culinary Provenance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
