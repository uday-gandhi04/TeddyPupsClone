import React, { useEffect, useRef, useState } from 'react';
import TeddyRunnerMascot from './TeddyRunnerMascot';

const ZONE_TARGETS = {
  hero: { x: 50, y: 76, facing: 1, bubble: '', hidden: true },
  doors: { x: 21, y: 83, facing: 1, bubble: '', hidden: true },
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
          <TeddyRunnerMascot isWalking={pose.walking} />
        </div>
      </div>
    </>
  );
}
