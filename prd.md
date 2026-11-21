# TeddyPups U.A.E. — Product Requirements Document (PRD)

---

## 1. Executive Summary & Vision

**TeddyPups U.A.E.** is a premium boutique puppy platform serving Dubai, Abu Dhabi, and the wider United Arab Emirates. The platform specializes in ethical, high-standard sourcing and adoption of rare miniature, teacup, and teddy-bear dog breeds (Maltipoo, Teacup Poodle, Cavapoo, Pomeranian, and Shih Tzu).

The platform bridges European and Korean luxury pet breeding standards with Dubai's high-touch concierge culture. By blending whimsical storybook visual design with frictionless WhatsApp-first customer support, TeddyPups eliminates the opacity, risk, and friction traditionally associated with buying imported and local puppies in the GCC region.

---

## 2. Target Audience & User Personas

### Persona A: The High-Net-Worth Expat Family ("The Downtown Family")
- **Profile**: Living in Downtown Dubai, Dubai Hills, or Palm Jumeirah.
- **Pain Point**: Wants a tiny, non-shedding, hypoallergenic puppy suitable for luxury apartment living. Worried about puppy mills, unvaccinated pets, and deceptive online classifieds.
- **Goal**: Needs verified health certification, video proof, and the option to either visit a physical Dubai showroom or receive hand-delivered cabin delivery.

### Persona B: The Luxury Pet Enthusiast ("The Teacup Collector")
- **Profile**: Seeking rare Korean micro/teacup lines with signature baby-doll faces, short muzzles, and micro proportions.
- **Pain Point**: Hard to find authentic Korean teacup lines in the UAE with transparent lineage and honest weight estimates.
- **Goal**: Transparent documentation, clear breeder origin, professional hand-delivery via Flight Nanny.

### Persona C: The First-Time Pet Parent ("The Young Professional")
- **Profile**: Single or young couple living in Dubai Marina / DIFC seeking a companion.
- **Pain Point**: Overwhelmed by pet care requirements, airline rules, veterinary paperwork, and microchip registration.
- **Goal**: Clear step-by-step guidance, ongoing WhatsApp support, complete starter package (vaccines, passport, crate).

---

## 3. Core Value Propositions

1. **Dual Fulfillment Model ("Two Ways to Meet")**:
   - **Showroom in Dubai**: Puppies already in the UAE available for immediate meet-and-greets and same-day homing.
   - **Direct Korean/Global Order**: Hand-picked, ultra-rare teacup puppies flown in cabin with an escort nanny directly to Dubai International Airport (DXB).
2. **Transparent Health & Origin**:
   - Every puppy comes with a microchip, international pet passport, age-appropriate vaccinations, genetic health guarantee, and veterinary clearance.
3. **High-Touch Concierge Support**:
   - Instant 1-click WhatsApp inquiry pre-populated with puppy reference ID, reducing inquiry friction to under 5 seconds.
4. **Whimsical Storybook Digital Experience**:
   - Hand-crafted interactive mascot animations ("Teddy"), custom paw cursor, door-opening reveals, and tactile polaroid galleries that build emotional warmth and brand loyalty.

---

## 4. Key Functional Requirements

### 4.1 Global Platform Components
- **Responsive Navigation Bar**:
  - Brand identity with official logo mark.
  - Active page indicator with paw icon.
  - Quick links: Home, Puppies, Happy Families, How It Works, FAQ, Visit & Contact.
  - Prominent WhatsApp concierge CTA (`#1A5336` capsule button).
- **Interactive Storybook Mascot ("Teddy")**:
  - Global scroll mascot that tracks viewport progress through dedicated section anchors.
  - Authentic vector illustration with animated walk cycles (4-leg trot, bobbing body, wagging tail, ear bounce).
- **Interactive Paw Cursor**:
  - Custom branded paw cursor tracking mouse movements on desktop with playful click bursts.
- **Polaroid Lightbox Modal**:
  - Full-screen modal for real family photos with realistic paper texture, tape pins, and captions.
- **Toast Notification System**:
  - Non-intrusive feedback toasts for clipboard copies and user actions.

### 4.2 Page-Specific Requirements

#### A. Home Page (`/`)
- **Hero Showcase**:
  - Plush Fraunces headline: *"Premium teacup puppies in Dubai"*.
  - Hand-drawn cursive eyebrow *"every puppy is family"* with decorative wavy SVG stroke.
  - 6 arched photo frames featuring real showroom puppies with hover tilts and speech tags.
  - Center peeking mascot over quilted scallop hem.
- **Meet the Pups (Horizontal Pinned Treadmill)**:
  - 100vh full-bleed pinned scroll experience.
  - 15 individual arched wooden doors with open/closed 3D perspective leaves.
  - Golden doorknobs, wood grain panels, and tilted *"Available"* tags.
  - Warm honey-oak plank floor with authentic 3px dark brown border.
  - Poodle runner mascot trotting in place on the floor line as user scrolls through doors.
- **Two Ways to Meet**:
  - Interactive comparison cards: Dubai Showroom vs. Korean Teacup Import.
  - Wooden signpost illustration with directional signboards.
- **WhatsApp Adoption Journey**:
  - 3-step progressive story: 1) Say hello, 2) Meet via video call, 3) Hand delivery to your door.
- **Puppy Passport & Health Guarantee**:
  - Detailed breakdown of microchip, vaccinations, rabies titer, veterinary health check, airline-approved carrier.
- **Happy Families Preview**:
  - Grid of polaroids featuring UAE adopters in Downtown Dubai, Dubai Hills, and Abu Dhabi.
- **Interactive FAQ Accordion**:
  - Top 4 frequently asked questions with instant expand/collapse.
- **Airport Cabin / Booking CTA**:
  - Airplane cabin window graphic with flight nanny reservation CTA.

#### B. Available Puppies Directory (`/puppies`)
- **Multi-Filter System**:
  - Filter by category: All, Korean Teacup, In Dubai, In Transit.
  - Filter by breed: Maltipoo, Toy Poodle, Cavapoo, Pomeranian, Shih Tzu.
  - Filter by gender: Boy, Girl.
- **Puppy Cards**:
  - Arched photo frames matching the home showcase style.
  - Availability badge (Available, Reserved, Gone Home).
  - Video tag indicator (*"with video"*).
  - Age, gender, estimated adult weight, and breed badges.
- **Quick WhatsApp Inquiry**:
  - Direct inquiry button passing puppy name and slug into WhatsApp message text.

#### C. Puppy Detail Profile (`/puppies/:slug`)
- **Photo & Video Gallery**:
  - High-resolution multi-angle photo carousel.
  - Video badge with playable showroom clips.
- **Puppy Vital Specifications**:
  - Breed, Gender, Age, Color, Estimated Adult Weight, Origin (Showroom vs. Korean Import).
- **Health & Lineage Checklist**:
  - Microchip ID, Vaccination status, Deworming record, Vet health certificate.
- **Sticky Inquiry Bar**:
  - Dynamic WhatsApp button pre-filling: *"Hi TeddyPups, I'm interested in [Puppy Name] ([Slug]). Is this puppy still available?"*
- **Related Puppies Showcase**:
  - Recommendations based on similar breed or temperament.

#### D. Happy Families & Testimonials (`/happy-families`)
- **Polaroid Photo Wall**:
  - High-res photo gallery of happy UAE pet parents with their puppies.
  - Captions noting puppy breed, family name, and UAE neighborhood.
  - Click-to-zoom Lightbox modal.
- **Customer Quote Callouts**:
  - Verified reviews highlighting health, travel ease, and customer service.

#### E. Concierge Adoption Guide (`/how-it-works`)
- **5-Stage Process Roadmap**:
  1. *Discovery & Inquiry*: Browsing showroom puppies or submitting custom breed requests.
  2. *Live Video Consultation*: Real-time 4K video meet to observe puppy personality and movement.
  3. *Health & Documentation*: Complete veterinary screening, vaccine records, passport, microchip.
  4. *Travel & Flight Escort*: Climate-controlled airline cabin accompanied by an escort nanny.
  5. *Home Delivery & Support*: White-glove doorstep delivery anywhere in UAE plus 24/7 care guidance.

#### F. Gone Home Showcase (`/gone-home`)
- **Adoption Hall of Fame**:
  - Visual celebration of recently homed puppies.
  - Fosters trust and urgency by proving regular adoption velocity.

#### G. FAQ Knowledge Base (`/faq`)
- **Categorized In-Depth Accordion**:
  - *Health & Warranties*: Genetic coverage, post-arrival vet check, vaccination protocol.
  - *Import & Travel*: UAE Ministry of Climate Change and Environment (MOCCAE) import permits, flight dates.
  - *Pricing & Payments*: Inclusions, reservation deposits, payment methods.
  - *Teacup Puppy Care*: Feeding schedules, hypoglycemia prevention, grooming tips.

#### H. Showroom Visit & Contact (`/contact`)
- **Location & Booking**:
  - Downtown Dubai showroom map and driving directions.
  - Business hours (Daily 10:00 AM – 9:00 PM by appointment).
  - Direct telephone, WhatsApp, and email links.
  - Interactive appointment request form with toast confirmation.

---

## 5. Non-Functional Requirements

| Metric / Dimension | Specification | Verification Method |
|---|---|---|
| **Performance** | First Contentful Paint (FCP) < 1.0s, Lighthouse Performance > 90 | Google Chrome Lighthouse audit |
| **Animation Fidelity** | 60 FPS smooth scroll and leg animations, zero layout shift (CLS < 0.05) | DevTools Performance timeline |
| **Cross-Browser** | Full parity on Chrome, Safari (macOS & iOS), Edge, Firefox | Headless and multi-device visual testing |
| **Mobile Responsiveness** | Breakpoints at 640px, 768px, 1024px, 1280px, 1440px | Chrome DevTools device mode |
| **Accessibility (a11y)** | WCAG 2.1 AA contrast ratios, ARIA labels on all SVG mascots and doors | Screen reader and accessibility audits |
| **Asset Optimization** | Modern WebP/AVIF formats with fallback JPGs, SVGs inlined with view-box pivots | Vite build bundle analyzer |

---

## 6. Success Metrics & KPIs

1. **Lead Conversion Rate**: > 8.5% of unique visitors triggering a WhatsApp consultation.
2. **Engagement Depth**: Average scroll depth through the 15-door pinned showcase > 70%.
3. **Gallery Interaction**: > 45% of visitors opening at least one puppy detail modal or polaroid lightbox.
4. **Bounce Rate**: < 32% on the landing page due to interactive storybook storytelling.
