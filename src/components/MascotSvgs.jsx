import React from 'react';

export function TeddyHeroMascot({ className = '' }) {
  return (
    <svg
      aria-label="Teddy, the TeddyPups puppy, peeking over the quilt"
      focusable="false"
      role="img"
      className={className}
      style={{ overflow: 'visible', width: '100%', height: 'auto', display: 'block' }}
      viewBox="0 0 300 240"
    >
      <g data-p="root">
        <ellipse
          cx="150"
          cy="230"
          data-p="shadow"
          fill="#2a170e"
          opacity="0"
          rx="92"
          ry="7"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          transform="translate(0 0) scale(1 1)"
        />
        <g data-p="head" transform="translate(0 4) rotate(0 212 100)">
          {/* Collar / Band */}
          <path
            d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z"
            fill="#a24a1a"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          {/* Tag */}
          <path
            d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z"
            fill="#fbe3b4"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
          {/* Left Ear */}
          <path
            d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
            data-p="earL"
            fill="#e4a352"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.4"
            transform="rotate(-6 174 82)"
          />
          {/* Right Ear */}
          <path
            d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
            data-p="earR"
            fill="#e4a352"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.4"
            transform="rotate(6 250 82)"
          />
          {/* Head Fluff */}
          <path
            d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
            fill="#f2be6b"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.4"
          />
          {/* Forehead Tuft */}
          <path
            d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
            fill="#f2be6b"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          {/* Muzzle */}
          <path
            d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z"
            fill="#fbe3b4"
          />
          {/* Blush Cheeks */}
          <circle cx="181" cy="116" fill="#f9b9a6" opacity="0.85" r="7" />
          <circle cx="243" cy="116" fill="#f9b9a6" opacity="0.85" r="7" />

          {/* Eyes */}
          <g data-p="eyes">
            <g data-p="open" opacity="1">
              <g data-p="blink">
                <ellipse cx="194" cy="98" fill="#2a170e" rx="7.4" ry="8.6" />
                <ellipse cx="230" cy="98" fill="#2a170e" rx="7.4" ry="8.6" />
                <circle cx="196.6" cy="94.6" fill="#fff" r="2.7" />
                <circle cx="232.6" cy="94.6" fill="#fff" r="2.7" />
                <circle cx="192" cy="101.2" fill="#fff" r="1.2" />
                <circle cx="228" cy="101.2" fill="#fff" r="1.2" />
              </g>
            </g>
          </g>

          {/* Nose */}
          <path
            d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z"
            fill="#2a170e"
          />
          {/* Mouth */}
          <path
            d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2"
            fill="none"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          {/* Tongue */}
          <path
            d="M207.6 127.4 Q212 136.6 216.4 127.4 Z"
            data-p="tongue"
            fill="#e98c8c"
            opacity="1"
            stroke="#2a170e"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </g>

        {/* Paws Resting on Quilt Edge */}
        <g data-p="ledge" opacity="1">
          <path
            d="M175 159 C175 148 181 142 190 142 C199 142 205 148 205 159 Z M219 159 C219 148 225 142 234 142 C243 142 249 148 249 159 Z"
            fill="#f2be6b"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.4"
          />
          <path
            d="M186 153 v-4.5 M194 153 v-4.5 M230 153 v-4.5 M238 153 v-4.5"
            fill="none"
            stroke="#2a170e"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
        </g>
      </g>
    </svg>
  );
}

export function PawNavIcon({ className = '' }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z" />
    </svg>
  );
}

export function LogoBadge({ className = 'brand-badge' }) {
  return (
    <img src="/brand/logo.png" alt="TeddyPups" className={className} />
  );
}

export function MascotWalking({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 96 86" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="48" cy="79" rx="26" ry="5" fill="rgba(43,26,16,0.16)" />
      <ellipse cx="45" cy="52" rx="22" ry="16" fill="#DF985E" stroke="#2B1A10" strokeWidth="2.5" />
      <circle cx="21" cy="44" r="6" fill="#C97B42" stroke="#2B1A10" strokeWidth="2.2" />
      <rect x="29" y="61" width="9" height="16" rx="4.5" fill="#C97B42" stroke="#2B1A10" strokeWidth="2.2" />
      <rect x="49" y="61" width="9" height="16" rx="4.5" fill="#DF985E" stroke="#2B1A10" strokeWidth="2.2" />
      <circle cx="63" cy="33" r="16" fill="#DF985E" stroke="#2B1A10" strokeWidth="2.5" />
      <ellipse cx="52" cy="34" rx="5.5" ry="9" fill="#C97B42" stroke="#2B1A10" strokeWidth="2.2" />
      <circle cx="67" cy="30" r="2.2" fill="#2B1A10" />
      <circle cx="75" cy="31" r="2.2" fill="#2B1A10" />
      <ellipse cx="73" cy="36" rx="3" ry="2.2" fill="#2B1A10" />
      <path d="M68 40 Q72 43 75 40" stroke="#2B1A10" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MascotPeeking() {
  return <TeddyHeroMascot />;
}

export function MascotSleeping() {
  return (
    <svg className="footer-sleeping-mascot" viewBox="0 0 170 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18 66 C18 96, 152 96, 152 66 Z" fill="#9A5226" stroke="#FDF8EE" strokeWidth="2.2" />
      <ellipse cx="85" cy="66" rx="67" ry="15" fill="#C47840" stroke="#FDF8EE" strokeWidth="2.2" />
      <path d="M36 78 Q85 90 134 78" stroke="#28150A" strokeWidth="2" strokeDasharray="6 5" />
      <ellipse cx="88" cy="58" rx="34" ry="18" fill="#DF985E" stroke="#2B1A10" strokeWidth="2.4" />
      <circle cx="63" cy="54" r="16" fill="#DF985E" stroke="#2B1A10" strokeWidth="2.4" />
      <ellipse cx="51" cy="57" rx="5.5" ry="9" fill="#C97B42" stroke="#2B1A10" strokeWidth="2" />
      <path d="M57 52 Q61 55 65 52" stroke="#2B1A10" strokeWidth="2" strokeLinecap="round" />
      <path d="M68 53 Q71 56 74 53" stroke="#2B1A10" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="64" cy="58" rx="2.6" ry="1.8" fill="#2B1A10" />
      <text x="115" y="34" fill="#F2B95E" fontFamily="Patrick Hand, cursive" fontSize="18">z</text>
      <text x="128" y="24" fill="#F2B95E" fontFamily="Patrick Hand, cursive" fontSize="22">z</text>
      <text x="142" y="15" fill="#F2B95E" fontFamily="Patrick Hand, cursive" fontSize="16">z</text>
    </svg>
  );
}

export function PawIcon({ width = 20, height = 18 }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 20" fill="currentColor" aria-hidden="true">
      <circle cx="5" cy="7" r="2.6" />
      <circle cx="10" cy="4" r="2.6" />
      <circle cx="15.5" cy="4.5" r="2.6" />
      <circle cx="19.5" cy="8" r="2.5" />
      <path d="M7.5 13 C7.5 10, 16.5 10, 16.5 13 C16.5 16.5, 14 18, 12 17.5 C10 18, 7.5 16.5, 7.5 13 Z" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export { TeddyRunnerMascot } from './TeddyRunnerMascot';

