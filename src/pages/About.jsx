import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/SectionTitle';
import { FaAward, FaCrown, FaHistory, FaUtensils, FaLeaf, FaArrowRight } from 'react-icons/fa';

export const About = () => {
  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '6rem' }}>
      {/* Banner */}
      <section
        className="py-5 position-relative text-center overflow-hidden"
        style={{
          backgroundColor: '#17130F',
          color: 'var(--warm-white)',
          paddingTop: '4.5rem',
          paddingBottom: '5rem'
        }}
      >
        <div className="container position-relative z-2">
          <div className="luxury-subtitle mb-2" style={{ color: 'var(--light-gold)' }}>
            A CENTURY OF DISTINCTION
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--warm-white)', fontWeight: '600' }}>
            The Story of VEXMO Grand Palace
          </h1>
          <p style={{ maxWidth: '640px', margin: '0 auto', color: '#D5CDC4', fontSize: '1rem', lineHeight: '1.8' }}>
            Commissioned in 1926 as a grand neoclassical sanctuary for visiting royal emissaries and poets, now preserved as an icon of global luxury hospitality.
          </p>
        </div>
      </section>

      {/* Story Narrative 1 */}
      <section className="py-5">
        <div className="container py-md-4">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <div className="luxury-subtitle">OUR FOUNDATIONS</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>
                Where Heritage Meets Timeless Comfort
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1rem' }}>
                Conceived by master architect Sir Edward Vance in collaboration with court artisans from Rajasthan, VEXMO Grand Palace was erected with hand-cut limestone arches, teak wood beams, and Belgian crystal chandeliers.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                Through a century of history, the palace has preserved its ceremonial proportions while discretely integrating acoustic triple-glazed windows, subterranean thermal baths, and zero-emission chauffeur transportation.
              </p>

              <div className="row g-3 pt-2">
                <div className="col-6">
                  <div className="p-3 rounded-1" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>1926</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Year of Foundation</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="p-3 rounded-1" style={{ backgroundColor: 'var(--cream)', border: '1px solid var(--border)' }}>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--primary)', fontWeight: 'bold' }}>100%</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Privately Preserved</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <img
                src="/src/assets/images/luxury_hotel_exterior_1791083042114.jpg"
                alt="Palace Facade"
                className="w-100 rounded-1 shadow-lg"
                style={{ maxHeight: '460px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-5" style={{ backgroundColor: 'var(--cream)' }}>
        <div className="container py-md-4">
          <SectionTitle
            subtitle="OUR PHILOSOPHY"
            title="The Three Pillars of Royal Hospitality"
            description="True luxury is never loud; it lives in the invisible orchestration of comfort, taste, and discretion."
          />

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="p-4 rounded-1 bg-white border border-light h-100">
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(201, 164, 92, 0.1)',
                    border: '1px solid rgba(201, 164, 92, 0.3)',
                    color: 'var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  <FaCrown />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Intuitive Service
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.7' }}>
                  Our staff is trained in classical palace etiquette. We anticipate requests before they are uttered, ensuring your privacy remains inviolate.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 rounded-1 bg-white border border-light h-100">
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(201, 164, 92, 0.1)',
                    border: '1px solid rgba(201, 164, 92, 0.3)',
                    color: 'var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  <FaUtensils />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Culinary Sincerity
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.7' }}>
                  We work exclusively with heirloom organic farms, local fishermen, and artisanal cheesemakers to craft honest, unforgettable flavours.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 rounded-1 bg-white border border-light h-100">
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '2px',
                    backgroundColor: 'rgba(201, 164, 92, 0.1)',
                    border: '1px solid rgba(201, 164, 92, 0.3)',
                    color: 'var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  <FaLeaf />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                  Eco-Conscious Heritage
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: '1.7' }}>
                  Our hot water and thermal pools are heated with 100% solar arrays, and single-use plastics have been completely banished since 2018.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center">
        <div className="container py-md-4">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', marginBottom: '1rem' }}>
            Experience the Legend in Person
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '540px', margin: '0 auto 2rem auto', fontSize: '0.95rem' }}>
            Join us for an evening of fine dining or reserve a royal suite for your upcoming journey.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/booking" className="btn-gold">
              Book a Suite
            </Link>
            <Link to="/contact" className="btn-dark-luxury">
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
