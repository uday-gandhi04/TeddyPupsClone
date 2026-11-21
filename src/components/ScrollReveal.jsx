import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
  children,
  delay = 0,
  variant = 'pop',
  className = '',
  style = {},
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return undefined;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -30px 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant}${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
