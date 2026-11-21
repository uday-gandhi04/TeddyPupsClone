import React from 'react';
import { Link } from 'react-router-dom';
import { GONE_HOME_PUPPIES } from '../data/siteData';
import ScrollReveal from '../components/ScrollReveal';

export default function GoneHomePage() {
  return (
    <div className="bg-diamond-grid">
      <main className="container">
        <section className="page-hero">
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', marginBottom: 14 }}>
            <div
              style={{
                background: 'var(--accent-terracotta)',
                color: '#fff',
                border: 'var(--border-ink)',
                borderRadius: '16px 16px 0 0',
                padding: '6px 24px',
                fontFamily: 'var(--font-hand)',
                fontSize: '1.3rem',
                letterSpacing: '0.04em',
              }}
            >
              tickets home
            </div>
            <div
              style={{
                background: 'var(--bg-amber)',
                border: 'var(--border-ink)',
                borderTop: 'none',
                borderRadius: '0 0 14px 14px',
                padding: '6px 20px',
                fontSize: '0.86rem',
                fontWeight: 800,
              }}
            >
              27 puppies welcomed by loving families
            </div>
          </div>
          <h1>Gone home</h1>
          <p>
            Every boarding pass below marks a TeddyPup who found their forever family in Dubai or
            across the globe.
          </p>
        </section>

        <section className="tickets-grid" aria-label="Adopted puppies boarding passes">
          {GONE_HOME_PUPPIES.map((p, i) => {
            const rot = ((i % 5) - 2) * 0.9;
            return (
              <ScrollReveal key={p.slug} delay={(i % 3) * 75} variant="pop">
                <Link
                  to={`/puppies/${p.slug}`}
                  className="boarding-pass"
                  style={{ transform: `rotate(${rot}deg)` }}
                >
                  <div className="boarding-pass__top">
                    <span>one ticket home</span>
                    <span>admit one</span>
                  </div>
                  <div className="boarding-pass__body">
                    <img src={p.img} alt={p.name} className="boarding-pass__photo" loading="lazy" />
                    <div>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: 3 }}>{p.name}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        {p.breed} &middot; {p.gender}
                      </p>
                    </div>
                  </div>
                  <div className="boarding-pass__route">
                    <span>{p.origin}</span>
                    <span>--------&gt;</span>
                    <span>HOME &hearts;</span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </section>
      </main>
    </div>
  );
}
