import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export const ReviewCard = ({ review }) => {
  return (
    <div
      className="p-4 p-md-5 h-100 d-flex flex-column justify-content-between"
      style={{
        backgroundColor: 'var(--warm-white)',
        border: '1px solid var(--border)',
        borderRadius: '2px',
        boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
        position: 'relative'
      }}
    >
      <div>
        {/* Quote watermark */}
        <FaQuoteLeft
          style={{
            fontSize: '2rem',
            color: 'rgba(201, 164, 92, 0.25)',
            marginBottom: '1rem'
          }}
        />

        {/* Stars */}
        <div className="d-flex gap-1 mb-3">
          {[...Array(review.stars)].map((_, i) => (
            <FaStar key={i} style={{ color: 'var(--gold)', fontSize: '0.9rem' }} />
          ))}
        </div>

        {/* Comment */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.15rem',
            color: 'var(--dark)',
            fontStyle: 'italic',
            lineHeight: '1.7',
            marginBottom: '1.5rem'
          }}
        >
          "{review.comment}"
        </p>
      </div>

      <div className="pt-3 border-top border-light d-flex align-items-center justify-content-between">
        <div>
          <div
            style={{
              fontWeight: '600',
              fontSize: '0.92rem',
              color: 'var(--dark)'
            }}
          >
            — {review.name}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
            {review.location}
          </div>
        </div>

        {review.roomStayed && (
          <div
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              fontWeight: '600'
            }}
          >
            {review.roomStayed}
          </div>
        )}
      </div>
    </div>
  );
};
