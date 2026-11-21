import React, { useState } from 'react';
import { CONTACT } from '../data/siteData';

const INITIAL_LETTER = {
  name: '',
  phone: '',
  email: '',
  area: '',
  topic: 'available-puppies',
  message: '',
};

export default function ContactPage({ onShowToast }) {
  const [letter, setLetter] = useState(INITIAL_LETTER);

  const handleSubmit = (e) => {
    e.preventDefault();
    onShowToast(`Letter posted! Thank you, ${letter.name || 'friend'} — we'll reply shortly.`);
    setLetter(INITIAL_LETTER);
  };

  return (
    <div className="bg-dot-grid">
      <main className="container">
        <section className="page-hero">
          <span className="eyebrow eyebrow--wavy">say hello</span>
          <h1>Get in touch with us</h1>
          <p>Visit our Downtown Dubai showroom, message us directly on WhatsApp, or post a letter below.</p>
        </section>

        <div className="contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="contact-card">
              <span className="eyebrow">direct lines</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 14 }}>Reach our concierge team</h2>
              <p style={{ marginBottom: 8 }}>
                <strong>WhatsApp / Phone:</strong>{' '}
                <a href={CONTACT.whatsappLink} style={{ color: 'var(--accent-green)', fontWeight: 700 }}>
                  {CONTACT.whatsappDisplay}
                </a>
              </p>
              <p style={{ marginBottom: 18 }}>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${CONTACT.email}`} style={{ color: 'var(--accent-terracotta)', fontWeight: 700 }}>
                  {CONTACT.email}
                </a>
              </p>
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
                style={{ width: '100%' }}
              >
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-card" style={{ background: 'var(--bg-peach)' }}>
              <span className="eyebrow">our showroom</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: 8 }}>Downtown Dubai</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 18 }}>
                Downtown Dubai, United Arab Emirates. Meet our locally available puppies in person
                and spend unhurried time bonding before you decide.
              </p>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--white"
                style={{ width: '100%' }}
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

          <form className="letter-card bg-lined-paper" onSubmit={handleSubmit}>
            <div className="paw-stamp" aria-hidden="true">
              <span style={{ fontSize: '1.4rem' }}>🐾</span>
              <span>DXB MAIL</span>
            </div>

            <div className="letter-prose">
              Dear TeddyPups,
              <br />
              my name is{' '}
              <input
                type="text"
                className="blank-input"
                required
                placeholder="your name"
                value={letter.name}
                onChange={(e) => setLetter({ ...letter, name: e.target.value })}
              />
              , and you can reach me on{' '}
              <input
                type="tel"
                className="blank-input"
                required
                placeholder="+971 50 ..."
                value={letter.phone}
                onChange={(e) => setLetter({ ...letter, phone: e.target.value })}
              />{' '}
              or by email at{' '}
              <input
                type="email"
                className="blank-input"
                placeholder="you@email.com"
                value={letter.email}
                onChange={(e) => setLetter({ ...letter, email: e.target.value })}
              />
              . I live in{' '}
              <input
                type="text"
                className="blank-input"
                placeholder="Dubai / city"
                value={letter.area}
                onChange={(e) => setLetter({ ...letter, area: e.target.value })}
              />
              , and I&apos;m curious about{' '}
              <select
                className="blank-input"
                value={letter.topic}
                onChange={(e) => setLetter({ ...letter, topic: e.target.value })}
              >
                <option value="available-puppies">available puppies</option>
                <option value="korean-teacup">importing a Korean teacup puppy</option>
                <option value="showroom-visit">visiting the Dubai showroom</option>
                <option value="worldwide-delivery">worldwide delivery</option>
                <option value="general">a general question</option>
              </select>
              .
            </div>

            <div className="field" style={{ marginTop: 20 }}>
              <label htmlFor="letterMsg" className="font-hand" style={{ fontSize: '1.3rem', color: 'var(--accent-terracotta)' }}>
                A little note (optional)
              </label>
              <textarea
                id="letterMsg"
                rows={4}
                placeholder="Tell us about the breed, color, or timeline you have in mind..."
                value={letter.message}
                onChange={(e) => setLetter({ ...letter, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn--primary">Post my letter</button>
          </form>
        </div>
      </main>
    </div>
  );
}
