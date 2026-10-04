import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

export const OfferCard = ({ offer }) => {
  return (
    <div className="luxury-card h-100 d-flex flex-column">
      <div className="luxury-card-img-wrap" style={{ height: '260px' }}>
        <img
          src={offer.image}
          alt={offer.title}
          loading="lazy"
        />
        {/* Tag & Savings */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'var(--gold)',
            color: 'var(--dark)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '700',
            padding: '0.3rem 0.75rem',
            borderRadius: '2px'
          }}
        >
          {offer.tag}
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(23, 19, 15, 0.9)',
            border: '1px solid rgba(201, 164, 92, 0.4)',
            color: 'var(--light-gold)',
            fontSize: '0.75rem',
            fontWeight: '600',
            padding: '0.35rem 0.85rem',
            borderRadius: '2px'
          }}
        >
          {offer.savings}
        </div>
      </div>

      <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              marginBottom: '1rem',
              fontWeight: '600'
            }}
          >
            {offer.title}
          </h3>

          <ul className="list-unstyled mb-4" style={{ fontSize: '0.82rem', color: 'var(--text)' }}>
            {offer.inclusions.map((inc, i) => (
              <li key={i} className="mb-2 d-flex align-items-center gap-2">
                <FaCheck style={{ color: 'var(--gold)', fontSize: '0.75rem' }} />
                <span>{inc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div
            className="py-2 border-top border-light mb-3"
            style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic' }}
          >
            {offer.priceNotice}
          </div>

          <Link
            to={`/booking?offer=${offer.id}`}
            className="btn-gold w-100 justify-content-center"
            style={{ fontSize: '0.75rem' }}
          >
            <span>Book This Package</span>
            <FaArrowRight className="btn-arrow ms-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
