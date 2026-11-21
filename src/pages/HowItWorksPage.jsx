import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data/siteData';

const MODES = {
  dubai: [
    { n: 1, t: 'Browse local puppies', d: 'Explore our currently available teacup and designer puppies right here in Downtown Dubai.' },
    { n: 2, t: 'Book a showroom visit', d: 'Message us on WhatsApp to arrange a warm, unhurried meet-and-greet at our showroom.' },
    { n: 3, t: 'Bond & review records', d: 'Spend time bonding with your puppy and review their verified vet health certificate and vaccinations.' },
    { n: 4, t: 'Take home the same day', d: 'Local puppies are ready immediately, with 24/7 post-adoption support from our team.' },
  ],
  imported: [
    { n: 1, t: 'Reserve your puppy', d: 'Tell us your dream breed or select an available Korean teacup or European puppy.' },
    { n: 2, t: 'Personalized consultation', d: 'Receive real photos, videos, and licensed vet health certificates directly on WhatsApp.' },
    { n: 3, t: 'Import & safe travel', d: 'We handle breeder coordination, health checks, travel arrangements, and all import documentation.' },
    { n: 4, t: 'Welcome home', d: 'Safe handover in Dubai or worldwide delivery via trusted pet cargo partners, backed by 24/7 care advice.' },
  ],
};

export default function HowItWorksPage() {
  const [mode, setMode] = useState('dubai');

  return (
    <main className="container">
      <section className="page-hero">
        <span className="eyebrow eyebrow--wavy">step by step, stress-free</span>
        <h1>How it works</h1>
        <p>
          Whether you visit our Downtown Dubai showroom in person or reserve a rare Korean teacup
          puppy upon request, we guide you every step of the way.
        </p>

        <div className="anchor-pills">
          <a href="#two-ways" className="btn btn--cream btn--sm">1 Two ways home</a>
          <a href="#promise" className="btn btn--cream btn--sm">2 Our premium puppy promise</a>
          <a href="#delivery" className="btn btn--cream btn--sm">3 Delivery &amp; collection</a>
          <a href="#why-us" className="btn btn--cream btn--sm">4 Why choose us</a>
        </div>
      </section>

      <section className="hiw-section" id="two-ways">
        <div style={{ textAlign: 'center' }}>
          <span className="eyebrow">1. two ways home</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', marginBottom: 18 }}>Choose your journey</h2>
          <div className="mode-toggle" role="tablist" aria-label="Adoption method">
            <button
              type="button"
              className={`mode-toggle__btn${mode === 'dubai' ? ' is-active' : ''}`}
              onClick={() => setMode('dubai')}
            >
              In Dubai (meet in person)
            </button>
            <button
              type="button"
              className={`mode-toggle__btn${mode === 'imported' ? ' is-active' : ''}`}
              onClick={() => setMode('imported')}
            >
              Imported (order upon request)
            </button>
          </div>
        </div>

        <div className="steps-4-grid">
          {MODES[mode].map((s) => (
            <article key={s.n} className="step-card">
              <div className="step-card__num">{s.n}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>{s.t}</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="hiw-section" id="promise">
        <span className="eyebrow">2. our premium puppy promise</span>
        <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', marginBottom: 24 }}>
          Every puppy leaves with our 3 passport guarantees
        </h2>
        <div className="tickets-grid" style={{ paddingBottom: 0 }}>
          <article className="passport-stamp passport-stamp--green" style={{ '--rot': '-1deg', padding: 24 }}>
            <span className="passport-stamp__seal">Health First</span>
            <h3>Licensed Vet Certification</h3>
            <p>Vaccinated, dewormed, and thoroughly examined by licensed veterinarians prior to handover or travel.</p>
          </article>
          <article className="passport-stamp passport-stamp--blue" style={{ '--rot': '1deg', padding: 24 }}>
            <span className="passport-stamp__seal">Real Media</span>
            <h3>100% Real Photos &amp; Videos</h3>
            <p>We share live photos, videos, and health documentation directly on WhatsApp before your puppy travels.</p>
          </article>
          <article className="passport-stamp" style={{ '--rot': '-0.8deg', padding: 24 }}>
            <span className="passport-stamp__seal">Always Here</span>
            <h3>24/7 Post-Adoption Support</h3>
            <p>Dedicated advice on nutrition, settling in, training, and general care whenever you need us.</p>
          </article>
        </div>
      </section>

      <section className="hiw-section" id="delivery">
        <div className="journey-grid">
          <div>
            <span className="eyebrow">3. delivery &amp; collection</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', marginBottom: 18 }}>
              Safe arrival from Korea to Dubai &amp; worldwide
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="step-card"><h3>Downtown Dubai Showroom</h3><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 6 }}>Meet local puppies in person and take your new companion home the same day.</p></div>
              <div className="step-card"><h3>Same-Day Dubai Delivery</h3><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 6 }}>Climate-controlled personal handover right to your doorstep across Dubai and the UAE.</p></div>
              <div className="step-card"><h3>Korea &amp; Europe Imports</h3><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 6 }}>End-to-end breeder coordination, permits, veterinary checks, and flight clearance.</p></div>
              <div className="step-card"><h3>Worldwide Pet Cargo</h3><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 6 }}>Trusted international pet travel partners delivering safely to loving homes worldwide.</p></div>
            </div>
          </div>

          <div className="flight-card" style={{ padding: 28 }}>
            <div className="flight-route">
              <span>Korea</span>
              <span className="flight-dots" />
              <span>&#9992;</span>
              <span className="flight-dots" />
              <span>Dubai</span>
            </div>
            <div className="airplane-window" style={{ width: 154, height: 154 }}>
              <img src="/images/poodle-cream.jpg" alt="Safe Korea to Dubai puppy travel" />
            </div>
            <p className="font-hand" style={{ textAlign: 'center', fontSize: '1.25rem', marginTop: 12 }}>
              Carefully supervised from certified breeders to your arms
            </p>
          </div>
        </div>
      </section>

      <section className="hiw-section" id="why-us" style={{ paddingBottom: 84 }}>
        <div className="contact-card" style={{ textAlign: 'center', background: 'var(--bg-peach)' }}>
          <span className="eyebrow eyebrow--wavy">4. why choose us</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', marginBottom: 12 }}>Every puppy is family</h2>
          <p style={{ maxWidth: 620, margin: '0 auto 24px', color: 'var(--text-secondary)' }}>
            From teacup Maltipoos and Korean Poodles to Pomeranians, Cavapoos, and Shih Tzus, we
            pair ethical sourcing with transparent, warm concierge care.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/puppies" className="btn btn--primary">Browse available puppies</Link>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
