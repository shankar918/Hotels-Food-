import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { OfferCard } from '../components/OfferCard';
import { OFFERS_DATA } from '../data/offers';
import { FaGift, FaGem, FaGlassCheers, FaConciergeBell } from 'react-icons/fa';

export const Offers = () => {
  return (
    <div style={{ backgroundColor: 'var(--warm-white)', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <SectionTitle
            subtitle="CURATED EXPERIENCES"
            title="Exclusive Offers & Seasonal Packages"
            description="Elevate your stay with signature culinary journeys, restorative thermal spa privileges, and bespoke weekend romantic escapes."
          />
        </div>

        {/* Highlight Banner */}
        <div
          className="p-4 p-md-5 rounded-1 mb-5"
          style={{
            backgroundColor: 'var(--dark)',
            color: 'var(--warm-white)',
            border: '1px solid rgba(201, 164, 92, 0.35)',
            boxShadow: 'var(--shadow-luxury)'
          }}
        >
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-8">
              <div style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                <FaGem className="me-2" /> VEXMO ROYAL PRIVILEGE CIRCLE
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--warm-white)', marginBottom: '0.75rem' }}>
                Complimentary In-Room Champagne & Chauffeur
              </h3>
              <p style={{ color: '#D5CDC4', fontSize: '0.9rem', marginBottom: 0, lineHeight: '1.7' }}>
                All package bookings made directly through our official concierge include late checkout until 16:00, access to the Roman Thermal Spa, and prioritized dining reservations.
              </p>
            </div>
            <div className="col-12 col-lg-4 text-lg-end">
              <a href="#packages" className="btn-gold">
                Browse All Packages
              </a>
            </div>
          </div>
        </div>

        {/* 6 Offers Grid */}
        <div id="packages" className="row g-4">
          {OFFERS_DATA.map((offer) => (
            <div key={offer.id} className="col-12 col-md-6 col-lg-4">
              <OfferCard offer={offer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
