import React, { useEffect, useRef, useState } from 'react';

export const AnimatedSection = ({
  children,
  className = '',
  animation = 'fadeUp', // 'fadeUp', 'fadeLeft', 'fadeRight', 'fadeIn', 'scaleIn'
  delay = 0,
  threshold = 0.15
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentTarget = domRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [threshold]);

  const getAnimClass = () => {
    switch (animation) {
      case 'fadeLeft':
        return 'reveal-left';
      case 'fadeRight':
        return 'reveal-right';
      case 'fadeIn':
        return 'reveal-fade';
      case 'scaleIn':
        return 'reveal-scale';
      case 'fadeUp':
      default:
        return 'reveal-up';
    }
  };

  return (
    <div
      ref={domRef}
      className={`reveal-init ${getAnimClass()} ${isVisible ? 'reveal-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};
