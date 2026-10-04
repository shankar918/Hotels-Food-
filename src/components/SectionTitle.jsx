import React from 'react';

export const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center',
  light = false
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-5 ${isCenter ? 'text-center' : 'text-start'}`}
      style={{ maxWidth: isCenter ? '760px' : '620px', margin: isCenter ? '0 auto' : '0' }}
    >
      {subtitle && (
        <div className="luxury-subtitle">
          {subtitle}
        </div>
      )}

      {title && (
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: light ? 'var(--warm-white)' : 'var(--dark)',
            lineHeight: 1.25,
            marginBottom: description ? '1rem' : '0',
            fontWeight: 600
          }}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          style={{
            fontSize: '1rem',
            color: light ? '#C7BEB3' : 'var(--muted)',
            lineHeight: 1.8,
            marginBottom: 0
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};
