import React, { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AVAILABLE_PUPPIES, GONE_HOME_PUPPIES } from '../data/siteData';
import { MascotWalking } from '../components/MascotSvgs';
import ScrollReveal from '../components/ScrollReveal';

const WHERE_OPTIONS = ['Everywhere', 'Imported', 'Korean Teacup'];
const BREED_OPTIONS = ['All', 'Maltipoo', 'Pomeranian', 'Poodle', 'Cavapoo', 'Shih Tzu'];
const GENDER_OPTIONS = ['All', 'Boys', 'Girls'];

export default function PuppiesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [where, setWhere] = useState(searchParams.get('where') || 'Everywhere');
  const [breed, setBreed] = useState(searchParams.get('breed') || 'All');
  const [gender, setGender] = useState(searchParams.get('gender') || 'All');

  const updateFilter = (nextWhere, nextBreed, nextGender) => {
    setWhere(nextWhere);
    setBreed(nextBreed);
    setGender(nextGender);
    const params = {};
    if (nextWhere !== 'Everywhere') params.where = nextWhere;
    if (nextBreed !== 'All') params.breed = nextBreed;
    if (nextGender !== 'All') params.gender = nextGender;
    setSearchParams(params, { replace: true });
  };

  const filtered = useMemo(
    () =>
      AVAILABLE_PUPPIES.filter((p) => {
        const matchWhere =
          where === 'Everywhere' ||
          (where === 'Imported' && (p.where === 'Imported' || p.koreanTeacup)) ||
          (where === 'Korean Teacup' && p.koreanTeacup);
        const matchBreed = breed === 'All' || p.breed === breed;
        const matchGender =
          gender === 'All' ||
          (gender === 'Boys' && (p.gender === 'boy' || p.genderLabel.includes('Boy'))) ||
          (gender === 'Girls' && (p.gender === 'girl' || p.genderLabel.includes('Girl')));
        return matchWhere && matchBreed && matchGender;
      }),
    [where, breed, gender]
  );

  const resetAll = () => updateFilter('Everywhere', 'All', 'All');

  return (
    <div className="bg-dot-grid">
      <main className="container">
        <section className="puppies-hero-row">
          <div>
            <span className="eyebrow eyebrow--wavy">from Teddy&apos;s sketchbook</span>
            <h1>Available puppies</h1>
            <p>
              Every listing shows real photos of the actual puppy. Open a profile to see them all,
              then ask us about them on WhatsApp.
            </p>
          </div>

          <div className="self-portrait-badge" aria-hidden="true">
            <div className="self-portrait-circle">
              <MascotWalking />
            </div>
            <span className="font-hand">Self-portrait</span>
          </div>
        </section>

        <section className="filter-card" aria-label="Filter available puppies">
          <span className="washi-tape washi-tape--blue" style={{ top: -11, left: 36, transform: 'rotate(-3deg)' }} />
          <span className="washi-tape washi-tape--pink" style={{ top: -11, right: 36, transform: 'rotate(4deg)' }} />

          <div className="filter-groups">
            <div className="filter-group">
              <span className="filter-label">where</span>
              {WHERE_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`filter-pill${where === opt ? ' is-active' : ''}`}
                  onClick={() => updateFilter(opt, breed, gender)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="filter-group">
              <span className="filter-label">breed</span>
              {BREED_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`filter-pill${breed === opt ? ' is-active' : ''}`}
                  onClick={() => updateFilter(where, breed === opt && opt !== 'All' ? 'All' : opt, gender)}
                >
                  {opt === 'All' ? 'All breeds' : opt}
                </button>
              ))}
            </div>

            <div className="filter-group">
              <span className="filter-label">boy or girl</span>
              {GENDER_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`filter-pill${gender === opt ? ' is-active' : ''}`}
                  onClick={() => updateFilter(where, breed, gender === opt && opt !== 'All' ? 'All' : opt)}
                >
                  {opt === 'All' ? 'Any' : opt}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="puppies-count-bar">
          <div className="puppies-count">
            {filtered.length} {filtered.length === 1 ? 'puppy' : 'puppies'} looking for a home
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <button type="button" className="btn btn--cream btn--sm" onClick={resetAll}>
              Reset filters
            </button>
          </div>
        </div>

        <section className="puppies-grid" aria-live="polite">
          {filtered.length === 0 ? (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '48px 20px',
                background: '#fff',
                border: 'var(--border-ink)',
                borderRadius: 22,
              }}
            >
              <h3 style={{ marginBottom: 8 }}>No puppies match those exact filters right now</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 18 }}>
                Try clearing a filter or message us on WhatsApp for upcoming Korean teacup arrivals.
              </p>
              <button type="button" className="btn btn--primary btn--sm" onClick={resetAll}>
                Show all 15 puppies
              </button>
            </div>
          ) : (
            filtered.map((p, idx) => (
              <ScrollReveal key={p.slug} delay={(idx % 4) * 75} variant="pop">
                <Link to={`/puppies/${p.slug}`} className="puppy-card">
                  <span className="badge-available puppy-card__badge">Available</span>
                  <div className="puppy-card__circle">
                    <img src={p.images[0]} alt={`${p.name} — ${p.breed}`} loading="lazy" />
                    {p.hasVideo && <span className="video-pill-overlay">&#9654; video</span>}
                  </div>
                  <h3>{p.name}</h3>
                  <div className="puppy-card__meta">
                    {p.breed} &middot; {p.genderLabel} &middot; {p.age}
                  </div>
                  <div className="puppy-card__tags">
                    <span className="chat-chip">{p.koreanTeacup ? 'Korean Teacup' : 'Imported'}</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))
          )}
        </section>

        <ScrollReveal variant="up">
          <section className="gone-home-strip">
            <div className="gone-home-strip__intro">
              <h2>Already gone home</h2>
              <p>These puppies have found their families.</p>
              <Link to="/gone-home" className="btn btn--primary btn--sm">
                See the puppies who&apos;ve gone home
              </Link>
            </div>

            <div className="gone-home-strip__list">
              {GONE_HOME_PUPPIES.slice(0, 5).map((g) => (
                <Link key={g.slug} to={`/puppies/${g.slug}`} className="gone-preview-item">
                  <div className="gone-preview-circle">
                    <img src={g.img} alt={g.name} loading="lazy" />
                    <span className="gone-home-tag">Gone home ♥</span>
                  </div>
                  <strong>{g.name}</strong>
                </Link>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </div>
  );
}
