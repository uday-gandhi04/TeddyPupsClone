import React, { useEffect, useRef, useState } from 'react';

export default function PawCursor() {
  const cursorRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const [imprints, setImprints] = useState([]);
  const lastTrailPos = useRef({ x: 0, y: 0 });
  const nextId = useRef(1);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return undefined;

    setEnabled(true);
    document.body.classList.add('has-paw-cursor');

    const spawnImprint = (x, y, angle = 0, scale = 1) => {
      const id = nextId.current++;
      setImprints((prev) => [...prev.slice(-14), { id, x, y, angle, scale }]);
      setTimeout(() => {
        setImprints((prev) => prev.filter((item) => item.id !== id));
      }, 900);
    };

    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const interactive = e.target.closest('a, button, input, select, textarea, [role="tab"], .polaroid');
      setHovering(Boolean(interactive));

      const dx = e.clientX - lastTrailPos.current.x;
      const dy = e.clientY - lastTrailPos.current.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 280 && pressing) {
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        spawnImprint(e.clientX, e.clientY, angle, 0.72);
        lastTrailPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleDown = (e) => {
      setPressing(true);
      spawnImprint(e.clientX, e.clientY, (Math.random() - 0.5) * 32, 1.05);
    };

    const handleUp = () => setPressing(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);

    return () => {
      document.body.classList.remove('has-paw-cursor');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="paw-imprints-layer" aria-hidden="true">
        {imprints.map((p) => (
          <span
            key={p.id}
            className="paw-imprint"
            style={{
              left: p.x,
              top: p.y,
              '--rot': `${p.angle}deg`,
              '--scale': p.scale,
            }}
          >
            <svg width="22" height="20" viewBox="0 0 24 20" fill="currentColor">
              <circle cx="5" cy="7" r="2.6" />
              <circle cx="10" cy="4" r="2.6" />
              <circle cx="15.5" cy="4.5" r="2.6" />
              <circle cx="19.5" cy="8" r="2.5" />
              <path d="M7.5 13 C7.5 10, 16.5 10, 16.5 13 C16.5 16.5, 14 18, 12 17.5 C10 18, 7.5 16.5, 7.5 13 Z" />
            </svg>
          </span>
        ))}
      </div>

      <div
        ref={cursorRef}
        className={`paw-cursor${hovering ? ' is-hover' : ''}${pressing ? ' is-press' : ''}`}
        aria-hidden="true"
      >
        <svg width="26" height="24" viewBox="0 0 24 20" fill="none">
          <g fill="#9E4A1B" stroke="#2B1A10" strokeWidth="1.3">
            <circle cx="5" cy="7" r="2.5" />
            <circle cx="10" cy="4" r="2.5" />
            <circle cx="15.5" cy="4.5" r="2.5" />
            <circle cx="19.5" cy="8" r="2.4" />
            <path d="M7.5 13 C7.5 10, 16.5 10, 16.5 13 C16.5 16.5, 14 18, 12 17.5 C10 18, 7.5 16.5, 7.5 13 Z" />
          </g>
        </svg>
      </div>
    </>
  );
}
