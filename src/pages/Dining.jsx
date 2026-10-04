import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { FoodCard } from '../components/FoodCard';
import { FOOD_ITEMS } from '../data/foods';
import { FaUtensils, FaCalendarAlt, FaGlassCheers, FaClock, FaAward, FaArrowRight } from 'react-icons/fa';

export const Dining = ({ onAddToCart, cartItems }) => {
  const signatureDishes = FOOD_ITEMS.slice(0, 8);

  const venues = [
    {
      title: 'The Imperial Salon',
      subtitle: 'ROYAL FINE DINING',
      image: '/src/assets/images/vexmo_hero_pov_scene_1791082354397.jpg',
      hours: 'Dinner: 18:30 – 23:30',
      dress: 'Formal / Elegant Casual',
      description: 'Our flagship Michelin-calibrated dining room serving classical Awadhi, Kashmiri, and French degustation menus beneath antique chandeliers.'
    },
    {
      title: 'The Charcoal Courtyard',
      subtitle: 'WOOD-FIRED & CLAY OVEN',
      image: '/src/assets/images/vexmo_margherita_slice_1791082371702.jpg',
      hours: 'Lunch & Dinner: 12:00 – 00:00',
      dress: 'Smart Casual',
      description: 'Open-air courtyard with 485°C wood-fired ovens, charred ribeye fajitas, artisanal sourdough pizza, and tandoori skewers.'
    },
    {
      title: 'The Sommelier Library',
      subtitle: 'PRIVATE CELLAR & COCKTAILS',
      image: '/src/assets/images/vexmo_truffle_risotto_1791082394524.jpg',
      hours: 'Evening: 17:00 – 01:30',
      dress: 'Elegant Casual',
      description: 'An intimate mahogany-paneled retreat housing 1,400 rare vintage bottles, single-estate cold brews, and smoked artisanal craft mixology.'
    }
  ];

  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '6rem' }}>
      {/* Hero Banner */}
      <section
        className="py-5 position-relative text-center overflow-hidden"
        style={{
          backgroundColor: 'var(--dark)',
          color: 'var(--warm-white)',
          paddingTop: '4rem',
          paddingBottom: '5rem'
        }}
      >
        <div className="container position-relative z-2">
          <div className="luxury-subtitle mb-2" style={{ color: 'var(--light-gold)' }}>
            MICHELIN-CALIBRATED GASTRONOMY
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--warm-white)', fontWeight: '600', marginBottom: '1.25rem' }}>
            Exceptional Dining, <br />
            <span style={{ fontStyle: 'italic', color: 'var(--light-gold)' }}>Thoughtfully Served</span>
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto 2rem auto', color: '#D5CDC4', fontSize: '1rem', lineHeight: '1.8' }}>
            From dawn till midnight, our culinary masters orchestrate unforgettable multi-course degustations, wood-fired hearth delicacies, and in-room feasts.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/table-reservation" className="btn-gold py-3 px-4">
              <FaCalendarAlt className="me-2" /> Reserve a Table
            </Link>
            <Link to="/menu" className="btn-outline-gold py-3 px-4" style={{ color: '#FFFDF8', borderColor: 'rgba(255,255,255,0.4)' }}>
              <FaUtensils className="me-2 text-gold" /> Explore Full Menu
            </Link>
            <Link to="/food-booking" className="btn-dark-luxury py-3 px-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}>
              In-Room Food Order
            </Link>
          </div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-5">
        <div className="container py-md-4">
          <SectionTitle
            subtitle="OUR DINING SPACES"
            title="Three Distinct Gastronomic Salons"
            description="Whether seeking candlelit intimacy, casual hearth-fired vibrancy, or private vintage tastings, VEXMO provides an unparalleled setting."
          />

          <div className="row g-4 mb-5">
            {venues.map((venue, idx) => (
              <div key={idx} className="col-12 col-lg-4">
                <div className="luxury-card h-100 d-flex flex-column">
                  <div className="luxury-card-img-wrap" style={{ height: '240px' }}>
                    <img src={venue.image} alt={venue.title} />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        backgroundColor: 'rgba(23, 19, 15, 0.85)',
                        border: '1px solid rgba(201, 164, 92, 0.35)',
                        padding: '0.25rem 0.65rem',
                        color: 'var(--gold)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontWeight: '600'
                      }}
                    >
                      {venue.subtitle}
                    </div>
                  </div>

                  <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                        {venue.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                        {venue.description}
                      </p>
                    </div>

                    <div className="pt-3 border-top border-light">
                      <div className="d-flex align-items-center gap-2 mb-1" style={{ fontSize: '0.78rem', color: 'var(--text)' }}>
                        <FaClock style={{ color: 'var(--gold)' }} /> {venue.hours}
                      </div>
                      <div className="d-flex align-items-center gap-2" style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                        <FaGlassCheers style={{ color: 'var(--gold)' }} /> Attire: {venue.dress}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes Preview */}
      <section className="py-5" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container py-md-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
            <div>
              <div className="luxury-subtitle">CHEF RECOMMENDATIONS</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', margin: 0, fontWeight: '600' }}>
                Featured Signature Dishes
              </h2>
            </div>
            <Link to="/menu" className="luxury-link mt-3 mt-md-0">
              View All 20 Dishes on Menu <FaArrowRight className="ms-1" />
            </Link>
          </div>

          <div className="row g-4">
            {signatureDishes.map((dish) => (
              <div key={dish.id} className="col-12 col-md-6 col-lg-3">
                <FoodCard
                  food={dish}
                  onAddToCart={onAddToCart}
                  isInCart={cartItems?.some((i) => i.id === dish.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
