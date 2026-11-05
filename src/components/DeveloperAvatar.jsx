import React from 'react';

export default function DeveloperAvatar({ className = "w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Ambient background glow */}
      <div 
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-sage-500/20 via-sage-400/10 to-transparent blur-2xl" 
        aria-hidden="true" 
      />

      {/* Outer decorative ring */}
      <div 
        className="absolute inset-4 rounded-3xl border border-sage-400/20 bg-charcoal-900/60 backdrop-blur-sm -rotate-3 transition-transform hover:rotate-0 duration-500" 
        aria-hidden="true" 
      />

      {/* Main card illustration container */}
      <div className="relative w-full h-full p-4 flex items-center justify-center">
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="avatarTitle avatarDesc"
        >
          <title id="avatarTitle">Archana CS Developer Illustration</title>
          <desc id="avatarDesc">An illustrated developer avatar working on modern web interfaces</desc>

          {/* Background circle inside container */}
          <circle cx="200" cy="200" r="160" fill="#121922" stroke="#263647" strokeWidth="2" />
          <circle cx="200" cy="200" r="140" fill="#17212c" />

          {/* Abstract Code Grid Lines */}
          <path d="M80 140H170" stroke="#263647" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M80 160H140" stroke="#263647" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M230 140H320" stroke="#263647" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
          <path d="M260 160H320" stroke="#263647" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />

          {/* Floating UI Card - Left */}
          <g transform="translate(60, 200)">
            <rect width="90" height="60" rx="8" fill="#0d131a" stroke="#84a98c" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="4" fill="#84a98c" />
            <rect x="26" y="14" width="48" height="4" rx="2" fill="#384d64" />
            <rect x="14" y="28" width="60" height="4" rx="2" fill="#263647" />
            <rect x="14" y="38" width="40" height="4" rx="2" fill="#84a98c" fillOpacity="0.7" />
          </g>

          {/* Floating Code Badge - Right */}
          <g transform="translate(250, 190)">
            <rect width="90" height="60" rx="8" fill="#0d131a" stroke="#263647" strokeWidth="1.5" />
            <text x="18" y="36" fontFamily="JetBrains Mono, monospace" fontSize="16" fontWeight="bold" fill="#a5c2ad">
              &lt;dev /&gt;
            </text>
            <circle cx="72" cy="26" r="3" fill="#84cc16" />
          </g>

          {/* Developer Avatar Body */}
          {/* Shoulders / Torso */}
          <path
            d="M130 330C130 290 160 270 200 270C240 270 270 290 270 330H130Z"
            fill="#263647"
          />
          {/* Shirt Accent Collar */}
          <path
            d="M185 270L200 292L215 270"
            stroke="#84a98c"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Head & Neck */}
          <rect x="190" y="245" width="20" height="28" rx="4" fill="#d7b99c" />
          
          {/* Hair back */}
          <ellipse cx="200" cy="190" rx="48" ry="52" fill="#1f242d" />
          
          {/* Face */}
          <ellipse cx="200" cy="200" rx="40" ry="44" fill="#ecc6a6" />

          {/* Hair front / styling */}
          <path
            d="M156 195C158 160 175 145 200 145C225 145 242 160 244 195C236 175 220 170 200 172C180 170 164 175 156 195Z"
            fill="#1f242d"
          />
          <path
            d="M160 188C154 205 154 225 158 240C164 225 166 215 166 200"
            fill="#1f242d"
          />
          <path
            d="M240 188C246 205 246 225 242 240C236 225 234 215 234 200"
            fill="#1f242d"
          />

          {/* Friendly Glasses */}
          <rect x="172" y="194" width="22" height="15" rx="4" stroke="#84a98c" strokeWidth="2.5" fill="none" />
          <rect x="206" y="194" width="22" height="15" rx="4" stroke="#84a98c" strokeWidth="2.5" fill="none" />
          <line x1="194" y1="200" x2="206" y2="200" stroke="#84a98c" strokeWidth="2" />

          {/* Eyes behind lenses */}
          <circle cx="183" cy="201" r="2.5" fill="#1f242d" />
          <circle cx="217" cy="201" r="2.5" fill="#1f242d" />

          {/* Welcoming Smile */}
          <path
            d="M192 224C196 228 204 228 208 224"
            stroke="#b88365"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Laptop Base at foreground */}
          <g transform="translate(135, 305)">
            {/* Screen back edge */}
            <rect x="15" y="-15" width="100" height="20" rx="3" fill="#121922" stroke="#384d64" strokeWidth="1" />
            <circle cx="65" cy="-5" r="4" fill="#84a98c" />
            {/* Base */}
            <path
              d="M0 5L15 0H115L130 5C130 8 126 10 120 10H10C4 10 0 8 0 5Z"
              fill="#1d2a38"
              stroke="#384d64"
              strokeWidth="1.5"
            />
          </g>

          {/* Ambient corner sparkles */}
          <circle cx="110" cy="110" r="3" fill="#84a98c" className="animate-pulse" />
          <circle cx="295" cy="100" r="2" fill="#a5c2ad" />
          <circle cx="310" cy="290" r="2.5" fill="#84a98c" />
        </svg>
      </div>
    </div>
  );
}
