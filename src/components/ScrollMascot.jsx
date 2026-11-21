import React, { useEffect, useRef, useState } from 'react';

const ZONE_TARGETS = {
  hero: { x: 50, y: 76, facing: 1, bubble: '', hidden: true },
  doors: { x: 21, y: 83, facing: 1, bubble: '', hidden: false },
  'two-ways': { x: 49, y: 78, facing: 1, bubble: 'coming?', hidden: false },
  journey: { x: 55, y: 79, facing: 1, bubble: '', hidden: false },
  passport: { x: 37, y: 76, facing: 1, bubble: '', hidden: false },
  families: { x: 51, y: 80, facing: -1, bubble: '', hidden: false },
  faq: { x: 14, y: 74, facing: 1, bubble: '?', hidden: false },
  cabin: { x: 34, y: 78, facing: 1, bubble: 'coming?', hidden: false },
  footer: { x: 14, y: 76, facing: 1, bubble: '', hidden: true },
};

export default function ScrollMascot({ journeyStep }) {
  const [pose, setPose] = useState({
    x: 50,
    y: 76,
    facing: 1,
    walking: false,
    bubble: '',
    hidden: true,
    zone: 'hero',
  });
  const [paws, setPaws] = useState([]);
  const currentRef = useRef({ x: 50, y: 76, lastScrollY: 0, lastPawTime: 0 });
  const targetRef = useRef(ZONE_TARGETS.hero);
  const pawId = useRef(1);

  useEffect(() => {
    let rafId = 0;
    let stopWalkTimer = null;

    const computeTarget = () => {
      const zones = document.querySelectorAll('[data-mascot-zone]');
      const midY = window.innerHeight * 0.52;
      let activeZone = 'hero';

      zones.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= midY && rect.bottom >= midY * 0.45) {
          activeZone = el.dataset.mascotZone;
        }
      });

      const base = ZONE_TARGETS[activeZone] || ZONE_TARGETS.doors;
      const bubble =
        activeZone === 'journey' && journeyStep === 2 ? 'ooh, photos!' : base.bubble;

      targetRef.current = { ...base, bubble, zone: activeZone };
    };

    const handleScroll = () => {
      computeTarget();
      const now = Date.now();
      const dy = Math.abs(window.scrollY - currentRef.current.lastScrollY);
      currentRef.current.lastScrollY = window.scrollY;

      if (dy > 3 && !targetRef.current.hidden) {
        setPose((prev) => ({ ...prev, walking: true }));
        clearTimeout(stopWalkTimer);
        stopWalkTimer = setTimeout(() => {
          setPose((prev) => ({ ...prev, walking: false }));
        }, 200);

        if (now - currentRef.current.lastPawTime > 240) {
          currentRef.current.lastPawTime = now;
          const id = pawId.current++;
          const px = currentRef.current.x;
          const py = currentRef.current.y;
          setPaws((prev) => [...prev.slice(-7), { id, x: px, y: py }]);
          setTimeout(() => {
            setPaws((prev) => prev.filter((item) => item.id !== id));
          }, 1100);
        }
      }
    };

    const tick = () => {
      const t = targetRef.current;
      const c = currentRef.current;
      const dx = t.x - c.x;
      const dy = t.y - c.y;
      c.x += dx * 0.11;
      c.y += dy * 0.11;

      const facing = Math.abs(dx) > 0.65 ? (dx > 0 ? 1 : -1) : t.facing;

      setPose((prev) => ({
        ...prev,
        x: c.x,
        y: c.y,
        facing,
        bubble: t.bubble,
        hidden: t.hidden,
        zone: t.zone,
      }));
      rafId = requestAnimationFrame(tick);
    };

    computeTarget();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', computeTarget, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(stopWalkTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', computeTarget);
    };
  }, [journeyStep]);

  return (
    <>
      <div className="mascot-paws-layer" aria-hidden="true">
        {paws.map((p) => (
          <span
            key={p.id}
            className="mascot-trail-paw"
            style={{ left: `${p.x}%`, top: `${p.y + 4.5}%` }}
          >
            <svg width="18" height="16" viewBox="0 0 24 20" fill="currentColor">
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
        className={`scroll-mascot${pose.hidden ? ' is-hidden' : ''}${pose.walking ? ' is-walking' : ''}`}
        style={{ left: `${pose.x}%`, top: `${pose.y}%` }}
        aria-hidden="true"
      >
        {pose.bubble && (
          <div className={`scroll-mascot__bubble${pose.bubble === '?' ? ' is-question' : ''}`}>
            {pose.bubble}
          </div>
        )}
        <div
          className="scroll-mascot__body"
          style={{ transform: `scaleX(${pose.facing})` }}
        >
          <svg viewBox="0 0 120 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Soft Ground Shadow */}
            <ellipse className="mascot-shadow" cx="60" cy="96" rx="32" ry="5" fill="rgba(43,26,16,0.18)" />

            {/* Wagging Pom-Pom Tail */}
            <g className="mascot-tail">
              <path d="M30 56 Q20 46 21 38" stroke="#2B1A10" strokeWidth="2.6" strokeLinecap="round" />
              <circle cx="20" cy="36" r="7.5" fill="#F2BE73" stroke="#2B1A10" strokeWidth="2.5" />
            </g>

            {/* Far Legs (Back-Left & Front-Left) */}
            <g className="mascot-leg mascot-leg--a">
              <rect x="33" y="68" width="11" height="23" rx="5.5" fill="#D5954A" stroke="#2B1A10" strokeWidth="2.4" />
            </g>
            <g className="mascot-leg mascot-leg--b">
              <rect x="65" y="68" width="11" height="23" rx="5.5" fill="#D5954A" stroke="#2B1A10" strokeWidth="2.4" />
            </g>

            {/* Fluffy Body */}
            <g className="mascot-torso">
              <ellipse cx="56" cy="60" rx="25" ry="18" fill="#F2BE73" stroke="#2B1A10" strokeWidth="2.6" />
              {/* Collar with little heart tag */}
              <path d="M62 49 Q73 54 80 48" stroke="#9E4A1B" strokeWidth="4.5" strokeLinecap="round" />
              <circle cx="72" cy="54" r="3" fill="#FDF8EE" stroke="#2B1A10" strokeWidth="1.5" />

              {/* Near Legs (Back-Right & Front-Right) */}
              <g className="mascot-leg mascot-leg--b">
                <rect x="42" y="70" width="11.5" height="23" rx="5.5" fill="#F2BE73" stroke="#2B1A10" strokeWidth="2.5" />
              </g>
              <g className="mascot-leg mascot-leg--a">
                <rect x="58" y="70" width="11.5" height="23" rx="5.5" fill="#F2BE73" stroke="#2B1A10" strokeWidth="2.5" />
              </g>

              {/* Fluffy Teddy Head */}
              <g className="mascot-head">
                {/* Ears */}
                <ellipse className="mascot-ear" cx="56" cy="38" rx="7" ry="12.5" fill="#DE9D50" stroke="#2B1A10" strokeWidth="2.4" />
                <ellipse className="mascot-ear" cx="94" cy="38" rx="6.5" ry="12" fill="#DE9D50" stroke="#2B1A10" strokeWidth="2.4" />
                {/* Main Head */}
                <circle cx="75" cy="36" r="19" fill="#F2BE73" stroke="#2B1A10" strokeWidth="2.6" />
                {/* Curly Top Poof */}
                <circle cx="69" cy="18" r="7.5" fill="#F2BE73" stroke="#2B1A10" strokeWidth="2.3" />
                <circle cx="80" cy="18" r="7.5" fill="#F2BE73" stroke="#2B1A10" strokeWidth="2.3" />
                <circle cx="75" cy="23" r="11" fill="#F2BE73" />
                {/* Eyes */}
                <circle cx="69" cy="35" r="2.7" fill="#2B1A10" />
                <circle cx="82" cy="35" r="2.7" fill="#2B1A10" />
                <circle cx="70" cy="34" r="0.9" fill="#FFFFFF" />
                <circle cx="83" cy="34" r="0.9" fill="#FFFFFF" />
                {/* Muzzle & Smile */}
                <ellipse cx="75.5" cy="41.5" rx="6.5" ry="4.5" fill="#FDF8EE" />
                <ellipse cx="75.5" cy="39.8" rx="3" ry="2.1" fill="#2B1A10" />
                <path d="M72 43.3 Q75.5 46.5 79 43.3" stroke="#2B1A10" strokeWidth="1.9" strokeLinecap="round" fill="none" />
                {/* Rosy Cheeks */}
                <ellipse cx="64" cy="40.5" rx="2.7" ry="1.6" fill="#E88A7A" opacity="0.75" />
                <ellipse cx="87" cy="40.5" rx="2.7" ry="1.6" fill="#E88A7A" opacity="0.75" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
