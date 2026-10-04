import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaCalendarAlt, FaUtensils } from 'react-icons/fa';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <>
      <nav className={`luxury-navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          {/* Left: Hotel Logo */}
          <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
            <div
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '2px',
                backgroundColor: 'rgba(201, 164, 92, 0.12)',
                flexShrink: 0
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
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
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                  letterSpacing: '0.2em',
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
                  fontSize: '0.52rem',
                  letterSpacing: '0.3em',
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

          {/* Center / Right: Desktop Links */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            <NavLink to="/" className={({ isActive }) => `luxury-nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/rooms" className={({ isActive }) => `luxury-nav-link ${isActive ? 'active' : ''}`}>
              Rooms
            </NavLink>
            <NavLink to="/dining" className={({ isActive }) => `luxury-nav-link ${isActive ? 'active' : ''}`}>
              Dining
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => `luxury-nav-link ${isActive ? 'active' : ''}`}>
              Menu
            </NavLink>
            <NavLink to="/offers" className={({ isActive }) => `luxury-nav-link ${isActive ? 'active' : ''}`}>
              Offers
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `luxury-nav-link ${isActive ? 'active' : ''}`}>
              Gallery
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `luxury-nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `luxury-nav-link ${isActive ? 'active' : ''}`}>
              Contact
            </NavLink>
          </div>

          {/* CTA: BOOK NOW */}
          <div className="d-none d-lg-flex align-items-center gap-2">
            <Link to="/table-reservation" className="btn-outline-gold py-2 px-3 text-nowrap" style={{ fontSize: '0.72rem' }}>
              <FaUtensils className="me-1" /> Reserve Table
            </Link>
            <Link to="/booking" className="btn-gold py-2 px-3 text-nowrap" style={{ fontSize: '0.72rem' }}>
              <FaCalendarAlt className="me-1" /> Book Now
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="d-lg-none border-0 bg-transparent text-white p-2 d-flex align-items-center justify-content-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{ fontSize: '1.4rem', color: 'var(--gold)', minWidth: '44px', minHeight: '44px' }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <div className="d-flex flex-column gap-2 text-center">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Home</Link>
              <Link to="/rooms" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Rooms & Suites</Link>
              <Link to="/dining" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Fine Dining</Link>
              <Link to="/menu" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Restaurant Menu</Link>
              <Link to="/food-booking" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">In-Room Food Order</Link>
              <Link to="/table-reservation" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Table Reservation</Link>
              <Link to="/offers" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Exclusive Offers</Link>
              <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Visual Gallery</Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Our Story</Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="luxury-nav-link py-2">Contact & Location</Link>

              <div className="d-flex flex-column gap-2 mt-3 pt-3 border-top border-secondary">
                <Link to="/table-reservation" onClick={() => setMobileMenuOpen(false)} className="btn-outline-gold justify-content-center py-2.5">
                  <FaUtensils className="me-2" /> Reserve a Table
                </Link>
                <Link to="/booking" onClick={() => setMobileMenuOpen(false)} className="btn-gold justify-content-center py-2.5">
                  <FaCalendarAlt className="me-2" /> Book a Room
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1040,
            backdropFilter: 'blur(3px)'
          }}
        />
      )}
    </>
  );
};
