import React from 'react';
import { HAPPY_MOMENTS } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function HappyFamiliesPage({ onOpenPolaroid }) {
  return (
    <main>
      <section className="page-hero container">
        <span className="eyebrow eyebrow--wavy">our wall of happy endings</span>
        <h1>Happy families</h1>
        <p>
          <strong style={{ color: 'var(--accent-terracotta)' }}>64 moments and counting</strong>{' '}
          &mdash; real snapshots from families who welcomed a TeddyPup into their homes.
        </p>
      </section>

      <section className="container" style={{ maxWidth: 780, marginBottom: 44 }}>
        <ScrollReveal variant="up">
          <div
            className="bg-lined-paper"
            style={{
              position: 'relative',
              padding: '32px 30px',
              border: 'var(--border-ink)',
              borderRadius: 18,
              boxShadow: 'var(--shadow-sticker-lg)',
              transform: 'rotate(-0.8deg)',
            }}
          >
            <span
              className="washi-tape"
              style={{ top: -12, left: '50%', transform: 'translateX(-50%) rotate(2deg)' }}
            />
            <p style={{ fontSize: '1.08rem', lineHeight: 1.95, marginBottom: 10 }}>
              &ldquo;TeddyPups truly made our dream a reality. They supported us at every step of the
              import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having
              24/7 support throughout the process gave us complete peace of mind.&rdquo;
            </p>
            <div className="font-hand" style={{ fontSize: '1.35rem', color: 'var(--accent-terracotta)' }}>
              &mdash; Sarah M., Dubai, UAE
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="container" style={{ paddingBottom: 88 }}>
        <div className="polaroid-wall-board bg-wood-planks">
          <div className="polaroid-grid">
            {HAPPY_MOMENTS.map((m, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 85} variant="polaroid">
                <figure
                  className="polaroid"
                  style={{ transform: `rotate(${m.rot}deg)` }}
                  onClick={() => onOpenPolaroid(m)}
                >
                  <span
                    className={`washi-tape ${m.tape}`}
                    style={{
                      top: -10,
                      left: '50%',
                      transform: `translateX(-50%) rotate(${m.rot * -1.2}deg)`,
                    }}
                  />
                  <div className="polaroid__img-wrap">
                    <img src={m.img} alt={m.caption} loading="lazy" />
                  </div>
                  <figcaption className="polaroid__caption">{m.caption}</figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
