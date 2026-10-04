import React from 'react';
import { FaPlus } from 'react-icons/fa';

export const GalleryCard = ({ item, onClick }) => {
  return (
    <div
      onClick={() => onClick(item)}
      className="position-relative overflow-hidden cursor-pointer"
      style={{
        borderRadius: '2px',
        border: '1px solid var(--border)',
        height: '280px',
        cursor: 'pointer'
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-100 h-100"
        style={{
          objectFit: 'cover',
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />

      {/* Hover Overlay */}
      <div
        className="gallery-overlay d-flex flex-column align-items-center justify-content-center text-center p-3"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(23, 19, 15, 0.75)',
          opacity: 0,
          transition: 'opacity 0.4s ease'
        }}
      >
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: 'var(--gold)',
            color: 'var(--dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            marginBottom: '0.75rem',
            transform: 'scale(0.8)',
            transition: 'transform 0.4s ease'
          }}
          className="gallery-plus-icon"
        >
          <FaPlus />
        </div>

        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.1rem',
            color: 'var(--warm-white)',
            fontWeight: '600',
            marginBottom: '0.25rem'
          }}
        >
          {item.title}
        </div>

        <div
          style={{
            fontSize: '0.68rem',
            color: 'var(--gold)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}
        >
          {item.category}
        </div>
      </div>

      <style>{`
        .cursor-pointer:hover img {
          transform: scale(1.08);
        }
        .cursor-pointer:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .cursor-pointer:hover .gallery-plus-icon {
          transform: scale(1) !important;
        }
      `}</style>
    </div>
  );
};
