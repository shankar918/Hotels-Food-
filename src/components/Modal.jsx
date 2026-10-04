import React from 'react';
import { FaTimes } from 'react-icons/fa';

export const Modal = ({ isOpen, onClose, title, children, maxWidth = '650px' }) => {
  if (!isOpen) return null;

  return (
    <div className="luxury-modal-overlay" onClick={onClose}>
      <div
        className="luxury-modal-content"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--gold)',
            fontSize: '1.2rem',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {title && (
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              color: 'var(--warm-white)',
              marginBottom: '1.25rem',
              borderBottom: '1px solid rgba(201, 164, 92, 0.25)',
              paddingBottom: '0.75rem'
            }}
          >
            {title}
          </h3>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
};
