import React, { useState } from 'react';
import { FaPlus, FaCheck, FaClock } from 'react-icons/fa';

export const FoodCard = ({ food, onAddToCart, isInCart }) => {
  const [addedAnim, setAddedAnim] = useState(false);

  const handleAdd = () => {
    onAddToCart(food);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 900);
  };

  return (
    <div className="luxury-card h-100 d-flex flex-column">
      <div className="luxury-card-img-wrap" style={{ height: '220px' }}>
        <img
          src={food.image}
          alt={food.name}
          loading="lazy"
          style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        />
        {/* Category Tag */}
        <div
          style={{
            position: 'absolute',
            top: '0.75rem',
            left: '0.75rem',
            backgroundColor: 'rgba(23, 19, 15, 0.85)',
            border: '1px solid rgba(201, 164, 92, 0.35)',
            padding: '0.25rem 0.65rem',
            color: 'var(--gold)',
            fontSize: '0.62rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '600'
          }}
        >
          {food.category}
        </div>

        {/* Prep Time */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: '0.75rem',
            backgroundColor: 'rgba(23, 19, 15, 0.8)',
            padding: '0.25rem 0.5rem',
            color: '#FFFDF8',
            fontSize: '0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            borderRadius: '2px'
          }}
        >
          <FaClock style={{ color: 'var(--gold)' }} /> {food.prepTime}
        </div>
      </div>

      <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          <div className="d-flex align-items-baseline justify-content-between mb-2">
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                margin: 0,
                fontWeight: '600'
              }}
            >
              {food.name}
            </h4>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                fontWeight: '700',
                color: 'var(--primary)',
                whiteSpace: 'nowrap',
                marginLeft: '0.5rem'
              }}
            >
              {food.currency}{food.price}
            </span>
          </div>

          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--muted)',
              marginBottom: '1rem',
              lineHeight: '1.6'
            }}
          >
            {food.description}
          </p>
        </div>

        <div className="pt-2 border-top border-light d-flex align-items-center justify-content-between">
          <div className="d-flex gap-1 flex-wrap">
            {food.tags?.map((t, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.65rem',
                  backgroundColor: 'var(--cream)',
                  color: 'var(--primary)',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '2px',
                  fontWeight: '500'
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <button
            onClick={handleAdd}
            className={`btn-gold py-1 px-3 ${addedAnim || isInCart ? 'bg-success border-success text-white' : ''}`}
            style={{ fontSize: '0.72rem' }}
          >
            {addedAnim || isInCart ? (
              <>
                <FaCheck className="me-1" /> Added
              </>
            ) : (
              <>
                <FaPlus className="me-1" /> Add to Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
