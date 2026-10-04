import React from 'react';
import {
  FaConciergeBell,
  FaUtensils,
  FaCarAlt,
  FaSpa,
  FaSwimmingPool,
  FaDumbbell,
  FaWifi,
  FaParking
} from 'react-icons/fa';

const iconMap = {
  FaConciergeBell,
  FaUtensils,
  FaCarAlt,
  FaSpa,
  FaSwimmingPool,
  FaDumbbell,
  FaWifi,
  FaParking
};

export const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || FaConciergeBell;

  return (
    <div
      className="p-4 h-100 luxury-service-card"
      style={{
        backgroundColor: 'var(--warm-white)',
        border: '1px solid var(--border)',
        borderRadius: '2px',
        transition: 'var(--transition-smooth)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        className="service-icon-wrap mb-3 d-inline-flex align-items-center justify-content-center"
        style={{
          width: '54px',
          height: '54px',
          backgroundColor: 'rgba(201, 164, 92, 0.1)',
          border: '1px solid rgba(201, 164, 92, 0.35)',
          color: 'var(--gold)',
          fontSize: '1.4rem',
          borderRadius: '2px',
          transition: 'transform 0.4s ease, background-color 0.4s ease'
        }}
      >
        <IconComponent />
      </div>

      <h4
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.2rem',
          marginBottom: '0.6rem',
          fontWeight: '600'
        }}
      >
        {service.title}
      </h4>

      <p
        style={{
          fontSize: '0.82rem',
          color: 'var(--muted)',
          marginBottom: '1rem',
          lineHeight: '1.6'
        }}
      >
        {service.description}
      </p>

      {/* Decorative gold hairline that expands on hover */}
      <div
        className="service-underline"
        style={{
          width: '32px',
          height: '2px',
          backgroundColor: 'var(--gold)',
          transition: 'width 0.4s ease'
        }}
      ></div>

      <style>{`
        .luxury-service-card:hover {
          transform: translateY(-6px);
          border-color: var(--gold);
          box-shadow: var(--shadow-luxury);
        }
        .luxury-service-card:hover .service-icon-wrap {
          transform: rotate(6deg) scale(1.08);
          background-color: var(--gold);
          color: var(--dark);
        }
        .luxury-service-card:hover .service-underline {
          width: 80px;
        }
      `}</style>
    </div>
  );
};
