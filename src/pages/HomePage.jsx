import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AVAILABLE_PUPPIES, CONTACT, FAQS, HAPPY_MOMENTS } from '../data/siteData';
import { TeddyHeroMascot, TeddyRunnerMascot, PawIcon } from '../components/MascotSvgs';
import ScrollMascot from '../components/ScrollMascot';
import ScrollReveal from '../components/ScrollReveal';

const HERO_LINEUP = [
  {
    slug: 'maltipoo-max-male',
    name: 'Max',
    breed: 'Maltipoo',
    img: '/images/hero/pup-maltipoo-l.jpg',
    alt: 'Max, male Maltipoo puppy',
    x: '9%',
    w: '8.6rem',
    peek: '0.62',
    tilt: '-5deg',
    objectPosition: 'center 60%',
  },
  {
    slug: 'korean-teacup-maltipoo-girl',
    name: 'Korean Teacup Maltipoo',
    breed: 'Maltipoo',
    img: '/images/hero/pup-maltipoo-w.jpg',
    alt: 'Female Korean Teacup Maltipoo puppy',
    x: '22.5%',
    w: '10.4rem',
    peek: '0.8',
    tilt: '3deg',
    objectPosition: 'center 50%',
  },
  {
    slug: 'shih-tzu-boy-2m',
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    img: '/images/hero/pup-shih-cr.jpg',
    alt: 'Male Shih Tzu puppy',
    x: '35%',
    w: '9.2rem',
    peek: '0.7',
    tilt: '-2deg',
    objectPosition: 'center 45%',
  },
  {
    slug: 'korean-teacup-poodle-girl',
    name: 'Toy Poodle',
    breed: 'Poodle',
    img: '/images/hero/pup-0.webp',
    alt: 'Toy Poodle puppy',
    x: '65%',
    w: '9.4rem',
    peek: '0.74',
    tilt: '3deg',
    objectPosition: 'center 45%',
  },
  {
    slug: 'pomeranian-girl-3m',
    name: 'Pomeranian',
    breed: 'Pomeranian',
    img: '/images/hero/pup-wings.jpg',
    alt: 'Female Pomeranian puppy',
    x: '77.5%',
    w: '10.6rem',
    peek: '0.82',
    tilt: '-3deg',
    tag: 'Pomeranian',
    objectPosition: 'center 40%',
  },
  {
    slug: 'shih-tzu-girl-2m',
    name: 'Shih Tzu',
    breed: 'Shih Tzu',
    img: '/images/hero/pup-shih-q.jpg',
    alt: 'Female Shih Tzu puppy',
    x: '91%',
    w: '8.4rem',
    peek: '0.6',
    tilt: '4deg',
    objectPosition: 'center 38%',
  },
];

const DOOR_COLORS = [
  '#a24a1a',
  '#5a3a28',
  '#d4893f',
  '#b8644a',
  '#623c27',
  '#d28b3e',
];

export default function HomePage({ onOpenPolaroid }) {
  const doorsPinRef = useRef(null);
  const railRef = useRef(null);
  const flightRouteRef = useRef(null);
  const journeyRef = useRef(null);
  const cabinRef = useRef(null);

  const [openDoors, setOpenDoors] = useState(() => new Set([0, 1]));
  const [doorsWalking, setDoorsWalking] = useState(false);
  const doorsWalkTimeoutRef = useRef(null);
  const [journeyStep, setJourneyStep] = useState(1);
  const [cabinOpen, setCabinOpen] = useState(false);

  const triggerDoorsWalk = () => {
    setDoorsWalking(true);
    clearTimeout(doorsWalkTimeoutRef.current);
    doorsWalkTimeoutRef.current = setTimeout(() => {
      setDoorsWalking(false);
    }, 240);
  };

  // Scroll-pinned horizontal 15-door showcase + scroll-linked WhatsApp Journey
  useEffect(() => {
    const onScroll = () => {
      const pinWrap = doorsPinRef.current;
      const rail = railRef.current;
      const flightRoute = flightRouteRef.current;
      if (flightRoute) {
        const svgRect = flightRoute.getBoundingClientRect();
        const viewH = window.innerHeight;
        const progress = Math.min(1, Math.max(0, (viewH - svgRect.top) / (viewH + svgRect.height)));

        if (!flightRoute.dataset.scrollControlled) {
          flightRoute.pauseAnimations();
          flightRoute.dataset.scrollControlled = 'true';
        }
        flightRoute.setCurrentTime(progress * 9);
      }

      if (pinWrap && rail && window.innerWidth > 900) {
        const rect = pinWrap.getBoundingClientRect();
        const scrollable = Math.max(1, pinWrap.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / scrollable));

        const maxRailScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
        rail.scrollLeft = progress * maxRailScroll;

        if (rect.top <= 20 && rect.bottom >= 0) {
          triggerDoorsWalk();
        }

        const openUpTo = Math.floor(progress * (AVAILABLE_PUPPIES.length + 1)) + 1;
        const nextOpen = new Set();
        for (let i = 0; i <= openUpTo; i += 1) nextOpen.add(i);
        setOpenDoors(nextOpen);
      }

      const jEl = journeyRef.current;
      if (jEl) {
        const jRect = jEl.getBoundingClientRect();
        const viewH = window.innerHeight;
        if (jRect.top < viewH * 0.72 && jRect.bottom > viewH * 0.25) {
          const jProg = Math.min(1, Math.max(0, (viewH * 0.56 - jRect.top) / (jRect.height * 0.72)));
          if (jProg < 0.34) setJourneyStep(1);
          else if (jProg < 0.68) setJourneyStep(2);
          else setJourneyStep(3);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const el = cabinRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setCabinOpen(true);
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleManualRailScroll = () => {
    triggerDoorsWalk();
    const rail = railRef.current;
    if (!rail || window.innerWidth > 900) return;
    const maxScroll = Math.max(1, rail.scrollWidth - rail.clientWidth);
    const prog = rail.scrollLeft / maxScroll;
    const openUpTo = Math.floor(prog * (AVAILABLE_PUPPIES.length + 1)) + 2;
    const nextOpen = new Set();
    for (let i = 0; i <= openUpTo; i += 1) nextOpen.add(i);
    setOpenDoors(nextOpen);
  };

  return (
    <main>
      <ScrollMascot journeyStep={journeyStep} />

      {/* 1. HERO SECTION — EXACT REFERENCE DESIGN */}
      <section className="tp-hero" aria-labelledby="hero-title" data-mascot-zone="hero">
        <span className="tp-hero__sun" aria-hidden="true" />

        <div className="container tp-hero__copy">
          <div className="tp-hero__eyebrow-wrap">
            <span className="tp-hero__note">every puppy is family</span>
            <svg
              className="tp-hero__wavy-line"
              viewBox="0 0 220 24"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M4 14c18-10 30 8 48-1s28-9 46 0 30 8 48-1 30-9 48 0 18 2 22 0"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
              />
            </svg>
          </div>

          <h1 id="hero-title" className="tp-hero__title">
            <span className="tp-hero__line">Premium teacup</span>
            <span className="tp-hero__line">puppies in Dubai</span>
          </h1>

          <p className="tp-hero__lede">
            Meet your new best friend in our Dubai showroom, or order a rare miniature breed from
            trusted breeders worldwide.
          </p>

          <div className="tp-hero__actions">
            <Link to="/puppies" className="btn btn--primary">
              View available puppies
            </Link>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--cream"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>

        <div className="tp-hero__stage">
          <ul className="tp-lineup" aria-label="Some of the puppies in our showroom">
            {HERO_LINEUP.map((pup, i) => (
              <li
                key={pup.slug}
                className="tp-lineup__seat"
                style={{
                  '--x': pup.x,
                  '--w': pup.w,
                  '--peek': pup.peek,
                  '--tilt': pup.tilt,
                  '--i': i,
                }}
              >
                {pup.tag && (
                  <span className="tp-lineup__tag" aria-hidden="true">
                    {pup.tag}
                  </span>
                )}
                <Link
                  to={`/puppies/${pup.slug}`}
                  className="tp-lineup__pup"
                  aria-label={`Meet ${pup.name}, ${pup.breed}`}
                >
                  <span className="tp-lineup__photo">
                    <img
                      src={pup.img}
                      alt={pup.alt}
                      style={{ objectPosition: pup.objectPosition || 'center' }}
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="tp-hero__teddy" aria-hidden="true">
            <TeddyHeroMascot />
          </div>

          <div className="tp-quilt" aria-hidden="true">
            <svg className="tp-quilt__edge" width="100%" height="40" preserveAspectRatio="none">
              <defs>
                <pattern id="tp-scallop" width="76" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40V27A38 25 0 0 1 76 27V40Z" fill="#FFF1D8" />
                  <path d="M0 27A38 25 0 0 1 76 27" fill="none" stroke="#2A170E" strokeWidth="3" />
                  <path
                    d="M11 33A27 19 0 0 1 65 33"
                    fill="none"
                    opacity=".42"
                    stroke="#2A170E"
                    strokeDasharray="3.5 5.5"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="40" fill="url(#tp-scallop)" />
            </svg>
          </div>
        </div>
      </section>

      {/* 2. MEET THE PUPS — FULL-BLEED SCROLL-PINNED 15-DOOR SHOWCASE */}
      <section className="doors-pin-wrapper tp-meet" ref={doorsPinRef} data-pinned="true" data-mascot-zone="doors">
        <div className="doors-pin-sticky tp-meet__stage">
          <header className="container tp-meet__head">
            <div>
              <h2 className="tp-meet__title">Meet the pups</h2>
              <p className="tp-meet__subtitle">Real puppies, real photos, looking for their families right now.</p>
            </div>
            <Link to="/puppies" className="btn btn--primary tp-meet__btn">See all available puppies</Link>
          </header>

          <div className="doors-v2__stage tp-meet__hall">
            <ol
              className="doors-v2__rail tp-meet__track"
              ref={railRef}
              onScroll={handleManualRailScroll}
              aria-label="15 available puppy doors"
            >
              {AVAILABLE_PUPPIES.map((pup, idx) => {
                const doorColor = DOOR_COLORS[idx % DOOR_COLORS.length];
                return (
                  <li
                    key={pup.slug}
                    className={`tp-door${openDoors.has(idx) ? ' is-open' : ''}`}
                    data-open={openDoors.has(idx) ? 'true' : 'false'}
                  >
                    <Link to={`/puppies/${pup.slug}`} className="tp-door__link" style={{ '--door': doorColor }}>
                      <span className="tp-door__plate">
                        <span className="tp-door__name">{pup.name}</span>
                        <span className="tp-door__meta">
                          {pup.metaText || `${pup.breed}, ${pup.genderLabel.toLowerCase()}, ${pup.age}${pup.hasVideo ? ', with video' : ''}`}
                        </span>
                      </span>
                      <span className="tp-door__frame">
                        <span className="tp-door__room">
                          <img src={pup.images[0]} alt={`${pup.name} — ${pup.breed}`} loading="lazy" />
                        </span>
                        <span aria-hidden="true" className="tp-door__way">
                          <span className="tp-door__leaf">
                            <span className="tp-door__knob" />
                          </span>
                        </span>
                        <span className="tp-door__tag">Available</span>
                      </span>
                    </Link>
                  </li>
                );
              })}

              <li className="tp-door tp-door--all">
                <Link to="/puppies" className="tp-door__link">
                  <span className="tp-door__frame tp-door__frame--all">
                    <div style={{ color: 'var(--accent-terracotta)', transform: 'scale(1.4)' }}>
                      <PawIcon />
                    </div>
                    <span className="tp-door__all">Meet them all</span>
                  </span>
                </Link>
              </li>
            </ol>

            {/* Full-Bleed Wooden Plank Floor */}
            <div className="tp-meet__floor" aria-hidden="true" />

            {/* Mascot Dog Scroller Illustration */}
            <div className="tp-meet__teddy" aria-hidden="true">
              <TeddyRunnerMascot isWalking={doorsWalking} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWO WAYS TO MEET YOUR PUPPY */}
      <section className="two-ways-section" data-mascot-zone="two-ways" aria-labelledby="two-ways-title">
        <div className="container two-ways-container">
          <h2 className="two-ways-title" id="two-ways-title">Two ways to<br />meet your puppy</h2>

          <div className="two-ways-signpost" aria-hidden="true">
            <svg viewBox="0 0 620 540" preserveAspectRatio="xMidYMin slice">
              <rect x="302" y="0" width="16" height="540" fill="#9A5226" stroke="#2B1A10" strokeWidth="3" />
              <path d="M18 47 51 12 H302 V82 H51 Z" fill="#8C481E" opacity=".38" />
              <path d="M318 12 H569 L602 47 569 82 H318 Z" fill="#8C481E" opacity=".38" />
              <path d="M12 40 46 6 H302 V76 H46 Z" fill="#D9913D" stroke="#2B1A10" strokeWidth="3" />
              <path d="M318 6 H574 L608 40 574 76 H318 Z" fill="#D9913D" stroke="#2B1A10" strokeWidth="3" />
              <path d="M62 15 H291 M329 15 H559" stroke="#F5C174" strokeWidth="2" opacity=".65" />
              <text x="169" y="52" textAnchor="middle" fill="#2B1A10" fontFamily="Fraunces, Georgia, serif" fontSize="27" fontWeight="800">Puppies in Dubai</text>
              <text x="459" y="52" textAnchor="middle" fill="#2B1A10" fontFamily="Fraunces, Georgia, serif" fontSize="27" fontWeight="800">Imported for you</text>
            </svg>
          </div>

          <div className="two-ways-grid">
            <ScrollReveal delay={0} variant="up">
              <article className="way-card way-card--local">
                <h3>Puppies in Dubai</h3>
                <div className="way-visual showroom-scene">
                  <svg className="showroom-skyline" viewBox="0 0 540 190" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M10 178 H530 M38 178 V116 H70 V178 M91 178 V72 L100 57 V39 H108 V57 L117 72 V178 M143 178 V92 L166 109 V178 M190 178 V126 H221 V178 M239 178 V79 H263 V178 M279 178 V136 H317 V178 M352 178 V101 H378 V178 M400 178 V57 H414 V31 H423 V57 L436 72 V178 M462 178 V125 H496 V178" fill="none" stroke="#B59B6D" strokeWidth="4" strokeLinejoin="round" opacity=".68" />
                  </svg>
                  <div className="awning-frame">
                    <div className="awning-stripes" />
                    <div className="awning-photo">
                      <img src="/images/maltipoo-apricot.jpg" alt="Puppy in our Dubai showroom" loading="lazy" />
                    </div>
                    <span className="awning-tag">In our showroom</span>
                  </div>
                </div>
                <p>See them, love them, take them home. Come meet our locally available puppies before you decide.</p>
                <Link to="/puppies?where=Everywhere" className="btn btn--primary">Meet local puppies</Link>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={140} variant="up">
              <article className="way-card way-card--import">
                <h3>Imported for you</h3>
                <div className="way-visual flight-scene">
                  <div className="flight-card">
                    <svg ref={flightRouteRef} className="flight-route" viewBox="0 0 460 250" role="img" aria-label="Flight route from Korea to Dubai">
                      <defs>
                        <clipPath id="flight-window-clip" clipPathUnits="objectBoundingBox">
                          <circle cx="0.5" cy="0.5" r="0.5" />
                        </clipPath>
                      </defs>
                      <path d="M28 202 C104 60 286 18 430 132" fill="none" stroke="#A94F1D" strokeWidth="2.5" strokeDasharray="2 9" strokeLinecap="round" />
                      <circle cx="28" cy="202" r="6" fill="#A94F1D" />
                      <circle cx="430" cy="132" r="6" fill="#A94F1D" />
                      <text x="5" y="230" fill="#2B1A10" fontFamily="Patrick Hand, cursive" fontSize="18">Korea</text>
                      <text x="408" y="160" fill="#2B1A10" fontFamily="Patrick Hand, cursive" fontSize="18">Dubai</text>
                      <g className="flight-plane">
                        <animateMotion dur="9s" fill="freeze" rotate="auto" path="M28 202 C104 60 286 18 430 132" />
                        <g transform="translate(-255 -97)">
                          <path d="M209 91 184 58 202 57 231 83 M263 85 286 49 305 48 291 91 M225 112 243 145 260 145 254 110" fill="#B75F2A" stroke="#2B1A10" strokeWidth="3" strokeLinejoin="round" />
                          <path d="M194 99 C194 81 213 73 239 72 L277 73 C297 74 315 82 323 97 C315 112 297 120 277 121 L239 122 C213 121 194 114 194 99 Z" fill="#FFFDF8" stroke="#2B1A10" strokeWidth="3" />
                          <circle cx="255" cy="97" r="19" fill="#FFFDF8" stroke="#2B1A10" strokeWidth="3" />
                          <image href="/brand/logo.png" x="239" y="81" width="32" height="32" preserveAspectRatio="xMidYMid slice" clipPath="url(#flight-window-clip)" />
                          <path d="M317 91 326 97 317 103" fill="none" stroke="#2B1A10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <p>
                  Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable
                  breeders and let us handle the import.
                </p>
                <Link to="/puppies?where=Korean+Teacup" className="btn btn--cream">See imported puppies</Link>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. YOUR PUPPY JOURNEY (SCROLL-LINKED WHATSAPP CHAT MOCKUP) */}
      <section className="journey-section" ref={journeyRef} data-mascot-zone="journey">
        <div className="container journey-grid">
          <div className="journey-copy">
            <span className="eyebrow">simple, personal &amp; joyful</span>
            <h2>Your puppy journey</h2>
            <p className="journey-lead">
              A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
            </p>

            <div className="journey-steps" role="tablist" aria-label="Puppy journey steps">
              {[
                {
                  num: 1,
                  title: 'Choose your breed',
                  desc: "Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.",
                },
                {
                  num: 2,
                  title: 'Get photos & details',
                  desc: 'Our team will share real photos, health details, and all necessary information directly on WhatsApp.',
                },
                {
                  num: 3,
                  title: 'Secure & safe delivery',
                  desc: 'Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.',
                },
              ].map((step) => (
                <div
                  key={step.num}
                  role="tab"
                  tabIndex={0}
                  aria-selected={journeyStep === step.num}
                  className={`journey-step${journeyStep === step.num ? ' is-active' : ''}`}
                  onClick={() => setJourneyStep(step.num)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setJourneyStep(step.num);
                  }}
                >
                  <div className="journey-step__num">{step.num}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/how-it-works" className="btn btn--cream">How it works</Link>
          </div>

          <div className="phone-wrap">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-avatar">
                    <svg viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="30" fill="#FBEBD2" />
                      <circle cx="32" cy="32" r="14" fill="#DF985E" stroke="#2B1A10" strokeWidth="2" />
                      <circle cx="27" cy="30" r="2.2" fill="#2B1A10" />
                      <circle cx="37" cy="30" r="2.2" fill="#2B1A10" />
                      <ellipse cx="32" cy="35" rx="3" ry="2" fill="#2B1A10" />
                    </svg>
                  </div>
                  <div>
                    <div className="phone-title">TeddyPups U.A.E.</div>
                    <div className="phone-status">{journeyStep === 2 ? 'typing...' : 'online'}</div>
                  </div>
                </div>

                <div className="phone-chat-body">
                  {journeyStep === 1 && (
                    <>
                      <div className="chat-bubble chat-bubble--out">
                        Hi TeddyPups! I&apos;d love to know more about your puppies.
                      </div>
                      <div className="chat-bubble chat-bubble--in">
                        Select your preferred breed or tell us what you&apos;re looking for. We&apos;ll
                        guide you based on availability and your lifestyle.
                        <div className="chat-chips">
                          {['Maltipoo', 'Pomeranian', 'Poodle', 'Cavapoo', 'Shih Tzu'].map((b) => (
                            <span key={b} className="chat-chip">{b}</span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                  {journeyStep === 2 && (
                    <>
                      <div className="chat-bubble chat-bubble--in">
                        <div className="chat-thumbs">
                          <img src="/images/maltipoo-apricot.jpg" alt="Max photo 1" />
                          <img src="/images/poodle-cream.jpg" alt="Teacup puppy photo 2" />
                        </div>
                      </div>
                      <div className="chat-bubble chat-bubble--in">
                        Our team will share real photos, health details, and all necessary
                        information directly on WhatsApp.
                      </div>
                      <div className="chat-bubble chat-bubble--in typing-bubble" aria-label="Typing">
                        <span className="typing-dot" />
                        <span className="typing-dot" />
                        <span className="typing-dot" />
                      </div>
                    </>
                  )}
                  {journeyStep === 3 && (
                    <>
                      <div className="chat-bubble chat-bubble--in">
                        Once confirmed, we handle everything professionally and ensure your puppy
                        reaches you safely and stress-free.
                      </div>
                      <div className="chat-bubble chat-bubble--in chat-delivery-card">
                        <svg viewBox="0 0 220 56" fill="none" style={{ width: '100%', height: 50 }}>
                          <circle cx="24" cy="30" r="14" fill="#FBEBD2" stroke="#2B1A10" strokeWidth="2" />
                          <text x="17" y="35" fontSize="14">🐾</text>
                          <path
                            d="M42 30 Q110 4 176 30"
                            stroke="#9E4A1B"
                            strokeWidth="2.5"
                            strokeDasharray="6 5"
                            className="delivery-dash-anim"
                          />
                          <rect x="180" y="16" width="28" height="24" rx="4" fill="#F3BA60" stroke="#2B1A10" strokeWidth="2" />
                          <path d="M176 18 L194 6 L212 18 Z" fill="#9E4A1B" stroke="#2B1A10" strokeWidth="2" />
                        </svg>
                        <span className="font-hand" style={{ fontSize: '0.98rem', color: 'var(--accent-terracotta)' }}>
                          Korea &rarr; Dubai &rarr; Your home ♥
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="phone-footer"
                >
                  <span>Say hello on WhatsApp</span>
                  <span className="phone-send-btn">&#10148;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY FAMILIES TRUST TEDDYPUPS (OPEN PUPPY PASSPORT + SUNSET DUBAI SKYLINE) */}
      <section className="passport-section" data-mascot-zone="passport">
        <div className="container">
          <ScrollReveal variant="up">
            <div className="passport-book">
              <div className="passport-page passport-page--left">
                <span className="eyebrow eyebrow--wavy">puppy passport</span>
                <h2>Why families trust TeddyPups</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Every puppy travels with licensed veterinary checks, transparent photo &amp; video
                  updates, and lifelong guidance from our Dubai concierge team.
                </p>
              </div>

              <div className="passport-page">
                <div className="passport-stamps">
                  <ScrollReveal delay={80} variant="pop">
                    <article className="passport-stamp passport-stamp--green" style={{ '--rot': '-1.5deg' }}>
                      <span className="passport-stamp__seal">Verified Vet</span>
                      <h3>Vet-checked &amp; healthy</h3>
                      <p>Every puppy comes vaccinated, dewormed, and with a verified health certificate.</p>
                    </article>
                  </ScrollReveal>
                  <ScrollReveal delay={160} variant="pop">
                    <article className="passport-stamp passport-stamp--blue" style={{ '--rot': '1.4deg' }}>
                      <span className="passport-stamp__seal">ICN &rarr; DXB</span>
                      <h3>Korea to Dubai, safely</h3>
                      <p>Trusted breeders, safe travel, and premium care from start to finish.</p>
                    </article>
                  </ScrollReveal>
                  <ScrollReveal delay={240} variant="pop">
                    <article className="passport-stamp" style={{ '--rot': '1.2deg' }}>
                      <span className="passport-stamp__seal">24/7 Care</span>
                      <h3>Support 24/7</h3>
                      <p>Always here to help, from choosing your puppy to post-delivery support.</p>
                    </article>
                  </ScrollReveal>
                  <ScrollReveal delay={320} variant="pop">
                    <article className="passport-stamp passport-stamp--red" style={{ '--rot': '-1.2deg' }}>
                      <span className="passport-stamp__seal">Worldwide</span>
                      <h3>Trusted by families worldwide</h3>
                      <p>Puppies delivered to loving homes all around the world.</p>
                    </article>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <svg className="dubai-skyline-svg" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
          <circle cx="960" cy="112" r="54" fill="#FBEBD2" opacity="0.55" />
          <path
            d="M0 160 V118 H70 V92 H112 V118 H155 V78 H195 V118 H260 V102 H310 V118 H420 V85 H470 V118 H610 V72 H650 V118 H760 V94 H805 V118 H885 V60 H900 V34 H908 V10 H914 V34 H922 V60 H938 V118 H1010 V84 H1058 V118 H1150 V98 H1208 V118 H1310 V76 H1362 V118 H1440 V160 Z"
            fill="#9A5226"
          />
        </svg>
      </section>

      {/* 6. HAPPY FAMILIES & PUPPIES (SCROLL-ANIMATED POLAROID PHOTO WALL) */}
      <section className="families-wall-section" data-mascot-zone="families">
        <div className="container">
          <div className="families-wall-header">
            <div>
              <span className="eyebrow eyebrow--gold eyebrow--wavy">our wall of happy endings</span>
              <h2>Happy families &amp; puppies</h2>
              <p style={{ color: 'var(--text-on-dark-muted)' }}>
                We are truly honored to see our puppies become cherished members of loving families.
                Click any Polaroid to take a closer look.
              </p>
            </div>

            <ScrollReveal variant="up">
              <div className="testimonial-bubble">
                <blockquote>
                  &ldquo;TeddyPups truly made our dream a reality. They supported us at every step of
                  the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect.
                  Having 24/7 support throughout the process gave us complete peace of mind.&rdquo;
                </blockquote>
                <cite>&mdash; Sarah M., Dubai, UAE</cite>
              </div>
            </ScrollReveal>
          </div>

          <div className="polaroid-wall-board bg-wood-planks">
            <div className="polaroid-grid">
              {HAPPY_MOMENTS.slice(0, 8).map((m, i) => (
                <ScrollReveal key={i} delay={(i % 4) * 90} variant="polaroid">
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

            <div className="wall-bottom-scene">
              <div className="wall-streetlamp" aria-hidden="true">
                <div className="streetlamp-glow" />
                <div className="streetlamp-post" />
              </div>
              <div className="wall-double-door" aria-hidden="true">
                <div className="wall-double-door__panel" />
                <div className="wall-double-door__panel" />
              </div>
              <Link to="/happy-families" className="btn btn--primary">See every happy family</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. QUESTIONS, ANSWERED (FAQ PREVIEW) */}
      <section className="faq-preview-section" data-mascot-zone="faq">
        <div className="container faq-preview-grid">
          <div className="faq-preview-left">
            <span className="eyebrow eyebrow--gold">curious? ask away</span>
            <h2>Questions, answered</h2>
            <p>
              Everything you need to know about our Dubai showroom, Korean teacup imports, health
              certificates, and delivery.
            </p>
            <Link to="/faq" className="btn btn--outline-light">Read all questions</Link>
          </div>
          <div className="faq-preview-list">
            {FAQS.slice(0, 3).map((item, i) => (
              <ScrollReveal key={item.q} delay={i * 90} variant="up">
                <article className="faq-star-card">
                  <h3>
                    <span className="star" aria-hidden="true">&#10022;</span> <span>{item.q}</span>
                  </h3>
                  <p>{item.a}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA — WOODEN CABIN DOORWAY WITH PORCH LIGHT & BUSHES */}
      <section className="final-cta-section" data-mascot-zone="cabin">
        <div className="container final-cta-grid">
          <div className="final-cta-copy">
            <span className="eyebrow eyebrow--wavy">home awaits</span>
            <h2>Ready to meet your new best friend?</h2>
            <p>
              Bring home a healthy, happy teacup or designer puppy with expert guidance every step
              of the way. We help you find the right match and ensure a smooth, safe delivery across
              the UAE.
            </p>
            <div className="final-cta-buttons">
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
              >
                Enquire on WhatsApp
              </a>
              <Link to="/contact" className="btn btn--white">Visit &amp; contact</Link>
            </div>
          </div>

          <div
            ref={cabinRef}
            className={`cabin-doorway bg-wood-planks${cabinOpen ? ' is-open' : ''}`}
          >
            <div className="porch-light" aria-hidden="true" />
            <div className="cabin-door-frame">
              <img src="/images/maltipoo-apricot.jpg" alt="Puppy waiting behind the door" loading="lazy" />
              <div className="cabin-door-leaf">
                <span className="door-knob" />
              </div>
            </div>
            <div className="cabin-porch-row">
              <span className="potted-bush" aria-hidden="true">🪴</span>
              <div className="welcome-mat">welcome home</div>
              <span className="potted-bush" aria-hidden="true">🪴</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
