import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaBed, FaVectorSquare, FaArrowRight } from 'react-icons/fa';

export const RoomCard = ({ room }) => {
  return (
    <div className="luxury-card h-100 d-flex flex-column">
      <div className="luxury-card-img-wrap">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
        />
        {/* Subtle Category Pill Badge */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'rgba(23, 19, 15, 0.85)',
            border: '1px solid rgba(201, 164, 92, 0.35)',
            padding: '0.35rem 0.75rem',
            color: 'var(--gold)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '600',
            borderRadius: '2px'
          }}
        >
          {room.category}
        </div>

        {/* Price Tag Overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(23, 19, 15, 0.9)',
            border: '1px solid rgba(201, 164, 92, 0.4)',
            padding: '0.4rem 0.85rem',
            color: 'var(--warm-white)',
            borderRadius: '2px'
          }}
        >
          <span style={{ fontSize: '0.7rem', color: '#C9A45C', marginRight: '4px' }}>From</span>
          <span style={{ fontSize: '1.1rem', fontWeight: '700', fontFamily: 'var(--font-serif)' }}>
            {room.currency}{room.price.toLocaleString()}
          </span>
          <span style={{ fontSize: '0.7rem', color: '#B5ADA4' }}> / Night</span>
        </div>
      </div>

      <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              marginBottom: '0.5rem',
              fontWeight: '600'
            }}
          >
            {room.name}
          </h3>

          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--muted)',
              marginBottom: '1.25rem',
              lineHeight: '1.6'
            }}
          >
            {room.shortDesc}
          </p>

          {/* Room Specs */}
          <div
            className="d-flex align-items-center justify-content-between py-2 border-top border-bottom border-light mb-4"
            style={{ fontSize: '0.75rem', color: 'var(--text)' }}
          >
            <span className="d-flex align-items-center gap-1">
              <FaUserFriends style={{ color: 'var(--gold)' }} /> {room.guests} Guests
            </span>
            <span className="d-flex align-items-center gap-1">
              <FaBed style={{ color: 'var(--gold)' }} /> {room.bed}
            </span>
            <span className="d-flex align-items-center gap-1">
              <FaVectorSquare style={{ color: 'var(--gold)' }} /> {room.size}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="d-flex align-items-center justify-content-between pt-1">
          <Link
            to={`/rooms/${room.id}`}
            className="luxury-link"
          >
            View Room
          </Link>
          <Link
            to={`/booking?room=${room.id}`}
            className="btn-gold py-2 px-3"
            style={{ fontSize: '0.72rem' }}
          >
            <span>Book Now</span>
            <FaArrowRight className="btn-arrow" style={{ fontSize: '0.7rem' }} />
          </Link>
        </div>
      </div>
    </div>
  );
};
