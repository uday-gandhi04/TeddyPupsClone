import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQS } from '../data/siteData';

export default function FaqPage() {
  const [query, setQuery] = useState('');
  const [openIndices, setOpenIndices] = useState(() => new Set([0, 1]));

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter(
      (f) => !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    );
  }, [query]);

  const toggleNote = (idx) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <div className="bg-dot-grid">
      <main className="container">
        <section className="page-hero">
          <span className="eyebrow eyebrow--wavy">pinned to the board</span>
          <h1>Questions &amp; answers</h1>
          <p>Search our corkboard notes below or click any pinned note to read the full answer.</p>
        </section>

        <div className="faq-layout">
          <aside className="faq-sidebar">
            <label
              htmlFor="faqSearch"
              className="font-hand"
              style={{ fontSize: '1.4rem', color: 'var(--accent-terracotta)', display: 'block' }}
            >
              sniff out a question
            </label>
            <input
              id="faqSearch"
              type="search"
              className="faq-search-input"
              placeholder="delivery, Korea, vaccinated..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="font-hand" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
              {matches.length} {matches.length === 1 ? 'note' : 'notes'} on the board
            </div>
            <Link to="/contact" className="btn btn--primary" style={{ width: '100%' }}>
              Ask your own question
            </Link>
          </aside>

          <section className="corkboard bg-corkboard" aria-label="Frequently asked questions">
            {matches.length === 0 ? (
              <div style={{ gridColumn: '1 / -1', background: '#FFF6C4', padding: 28, borderRadius: 10, textAlign: 'center' }}>
                <h3 style={{ marginBottom: 8 }}>No notes match &ldquo;{query}&rdquo;</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Ask us directly on WhatsApp or via our Contact page!
                </p>
              </div>
            ) : (
              matches.map((item, i) => {
                const isOpen = openIndices.has(i);
                const rot = ((i % 5) - 2) * 1.1;
                return (
                  <article
                    key={item.q}
                    className={`sticky-note${isOpen ? ' is-open' : ''}`}
                    style={{ '--note-rot': `${rot}deg` }}
                  >
                    <span className="pushpin" aria-hidden="true" />
                    <button
                      type="button"
                      className="sticky-note__trigger"
                      aria-expanded={isOpen}
                      onClick={() => toggleNote(i)}
                    >
                      <span>{item.q}</span>
                      <span>{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="sticky-note__answer">{item.a}</div>
                  </article>
                );
              })
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
