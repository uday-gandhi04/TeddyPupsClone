import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AVAILABLE_PUPPIES, CONTACT, GONE_HOME_PUPPIES } from '../data/siteData';

export default function PuppyDetailPage({ onShowToast }) {
  const { slug } = useParams();

  let isGoneHome = false;
  let availIdx = AVAILABLE_PUPPIES.findIndex((p) => p.slug === slug);
  let pup = availIdx >= 0 ? AVAILABLE_PUPPIES[availIdx] : null;

  if (!pup) {
    const g = GONE_HOME_PUPPIES.find((item) => item.slug === slug);
    if (g) {
      isGoneHome = true;
      availIdx = 0;
      pup = {
        slug: g.slug,
        name: g.name,
        breed: g.breed,
        genderLabel: g.gender,
        age: 'Adopted',
        whereLabel: g.origin === 'DUBAI SHOWROOM' ? 'Dubai Showroom' : 'Imported for family',
        images: [g.img, '/images/happy-family-1.jpg'],
        summary: `${g.name} has already found a loving forever home! Ask us on WhatsApp if you would like a similar ${g.breed}.`,
      };
    } else {
      availIdx = 0;
      pup = AVAILABLE_PUPPIES[0];
    }
  }

  const [slideIdx, setSlideIdx] = useState(0);
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    message: '',
  });

  useEffect(() => {
    setSlideIdx(0);
    setFormState({
      name: '',
      phone: '',
      email: '',
      area: '',
      message: `Hi TeddyPups, I'm interested in ${pup.name} (${pup.breed}, ${pup.genderLabel}). Could you please share more photos, videos, and availability details?`,
    });
  }, [pup.slug, pup.name, pup.breed, pup.genderLabel]);

  const prevPup = AVAILABLE_PUPPIES[(availIdx - 1 + AVAILABLE_PUPPIES.length) % AVAILABLE_PUPPIES.length];
  const nextPup = AVAILABLE_PUPPIES[(availIdx + 1) % AVAILABLE_PUPPIES.length];
  const waHref = `${CONTACT.whatsappLink}?text=${encodeURIComponent(
    `Hi TeddyPups! I'd love to ask about ${pup.name} (${pup.breed}).`
  )}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    onShowToast(`Postcard sent! Our team will reach out about ${pup.name} shortly.`);
    setFormState((prev) => ({ ...prev, name: '', phone: '', email: '', area: '' }));
  };

  return (
    <div className="bg-dot-grid">
      <main className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/puppies">Available puppies</Link> / <span>{pup.name}</span>
        </nav>

        {/* (1) hello, it's me */}
        <section className="detail-section">
          <span className="eyebrow eyebrow--wavy">(1) hello, it&apos;s me</span>
          <div className="detail-hero-grid" style={{ marginTop: 14 }}>
            <div className="carousel-box">
              <div className="carousel-stage">
                <img src={pup.images[slideIdx]} alt={`${pup.name} photo ${slideIdx + 1}`} />
              </div>
              <div className="carousel-controls">
                <button
                  type="button"
                  className="door-nav-btn"
                  aria-label="Previous photo"
                  onClick={() => setSlideIdx((i) => (i - 1 + pup.images.length) % pup.images.length)}
                >
                  &larr;
                </button>
                <span className="font-hand" style={{ fontSize: '1.25rem' }}>
                  {slideIdx + 1} / {pup.images.length}
                </span>
                <button
                  type="button"
                  className="door-nav-btn"
                  aria-label="Next photo"
                  onClick={() => setSlideIdx((i) => (i + 1) % pup.images.length)}
                >
                  &rarr;
                </button>
              </div>
              <div className="carousel-thumbs">
                {pup.images.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    className={`carousel-thumb${i === slideIdx ? ' is-active' : ''}`}
                    aria-label={`View photo ${i + 1}`}
                    onClick={() => setSlideIdx(i)}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            </div>

            <div className="binder-card">
              <div className="binder-rings" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((r) => (
                  <span key={r} className="binder-ring" />
                ))}
              </div>
              <span
                className="badge-available"
                style={isGoneHome ? { background: '#9A5226' } : undefined}
              >
                {isGoneHome ? 'Gone home ♥' : 'Available'}
              </span>
              <h1>{pup.name}</h1>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>{pup.summary}</p>

              <div className="profile-facts">
                <div className="profile-fact"><span>Breed</span><strong>{pup.breed}</strong></div>
                <div className="profile-fact"><span>Boy or girl</span><strong>{pup.genderLabel}</strong></div>
                <div className="profile-fact"><span>Age</span><strong>{pup.age}</strong></div>
                <div className="profile-fact"><span>Where</span><strong>{pup.whereLabel}</strong></div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn--whatsapp">
                  <span>Ask about {pup.name} on WhatsApp</span>
                </a>
                <a href="#enquiry-postcard" className="btn btn--cream">Send an enquiry</a>
              </div>
            </div>
          </div>
        </section>

        {/* (2) what comes with [Name] */}
        <section className="detail-section">
          <span className="eyebrow eyebrow--wavy">(2) what comes with {pup.name}</span>
          <h2 style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.3rem)', marginTop: 6 }}>Every Teddy Pup comes</h2>
          <div className="checklist-grid">
            <div className="check-item"><strong>&#10003; Vaccinated</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 4 }}>Up-to-date age-appropriate vaccinations completed.</p></div>
            <div className="check-item"><strong>&#10003; Dewormed</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 4 }}>Full preventative deworming protocol recorded.</p></div>
            <div className="check-item"><strong>&#10003; Verified health certificate</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 4 }}>Issued and signed by licensed veterinarians.</p></div>
            <div className="check-item"><strong>&#10003; Thoroughly checked</strong><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 4 }}>Carefully examined before joining your family.</p></div>
          </div>
        </section>

        {/* (3) the way home */}
        <section className="detail-section">
          <span className="eyebrow eyebrow--wavy">(3) the way home</span>
          <div className="timeline-grid">
            <div className="timeline-card"><div className="step-card__num">1</div><h3>Reserve your puppy</h3><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 6 }}>Confirm your match with our concierge team.</p></div>
            <div className="timeline-card"><div className="step-card__num">2</div><h3>Personalized consultation</h3><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 6 }}>Review real photos, videos, and vet paperwork on WhatsApp.</p></div>
            <div className="timeline-card"><div className="step-card__num">3</div><h3>Import and arrival</h3><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 6 }}>We manage travel, health checks, and customs smoothly.</p></div>
            <div className="timeline-card"><div className="step-card__num">4</div><h3>Welcome home</h3><p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 6 }}>Safe handover plus 24/7 nutrition and care guidance.</p></div>
          </div>
        </section>

        {/* (4) dear TeddyPups... Postcard Enquiry Form */}
        <section className="detail-section" id="enquiry-postcard">
          <span className="eyebrow eyebrow--wavy">(4) dear TeddyPups...</span>
          <form className="postcard-form" onSubmit={handleSubmit}>
            <div className="paw-stamp" aria-hidden="true">
              <span style={{ fontSize: '1.4rem' }}>🐾</span>
              <span>UAE AIR</span>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: 18 }}>Send an enquiry postcard</h2>
            <div className="form-grid-2">
              <div className="field">
                <label htmlFor="enqName">Your name *</label>
                <input
                  id="enqName"
                  type="text"
                  required
                  placeholder="e.g. Sarah Al Mansoori"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="enqPhone">Phone or WhatsApp *</label>
                <input
                  id="enqPhone"
                  type="tel"
                  required
                  placeholder="+971 50 ..."
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="enqEmail">Email (optional)</label>
                <input
                  id="enqEmail"
                  type="email"
                  placeholder="you@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="field">
                <label htmlFor="enqArea">Your area (optional)</label>
                <input
                  id="enqArea"
                  type="text"
                  placeholder="e.g. Downtown Dubai, Palm Jumeirah"
                  value={formState.area}
                  onChange={(e) => setFormState({ ...formState, area: e.target.value })}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="enquiryMessage">Message (optional)</label>
              <textarea
                id="enquiryMessage"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn--primary">Send enquiry</button>
          </form>
        </section>

        <nav className="prev-next-bar" aria-label="Browse other puppies">
          <Link to={`/puppies/${prevPup.slug}`} className="btn btn--cream btn--sm">
            &larr; Previous pup: {prevPup.name}
          </Link>
          <Link to={`/puppies/${nextPup.slug}`} className="btn btn--cream btn--sm">
            Next pup: {nextPup.name} &rarr;
          </Link>
        </nav>
      </main>
    </div>
  );
}
