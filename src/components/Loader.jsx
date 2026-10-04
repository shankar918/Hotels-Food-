import React, { useEffect, useState } from 'react';

export const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Quick, elegant 1.2s loader so the user isn't kept waiting
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1300);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2100);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className={`luxury-loader ${!loading ? 'hidden' : ''}`}>
      <div className="text-center px-4">
        {/* Crest / Flame Logo */}
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div
            style={{
              width: '46px',
              height: '46px',
              border: '1px solid #C9A45C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '2px',
              backgroundColor: 'rgba(201, 164, 92, 0.08)'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.4rem',
                color: '#C9A45C',
                fontWeight: '700'
              }}
            >
              V
            </span>
          </div>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.6rem',
            letterSpacing: '0.28em',
            color: '#FFFDF8',
            margin: '0 0 0.5rem 0',
            textTransform: 'uppercase',
            fontWeight: '600'
          }}
        >
          VEXMO GRAND PALACE
        </h2>

        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.68rem',
            letterSpacing: '0.3em',
            color: '#C9A45C',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}
        >
          YOUR STAY BEGINS HERE
        </div>

        <div className="loader-line-container mx-auto">
          <div className="loader-line"></div>
        </div>
      </div>
    </div>
  );
};
