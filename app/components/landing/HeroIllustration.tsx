export function HeroIllustration() {
  return (
    <div className="relative size-full min-h-[320px]">
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full"
      >
        <defs>
          <linearGradient id="hero-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e11d48" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="hero-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#e11d48" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <circle
          cx="320"
          cy="80"
          r="40"
          fill="url(#hero-grad-1)"
          opacity="0.8"
        />
        <circle
          cx="80"
          cy="220"
          r="30"
          fill="url(#hero-grad-2)"
          opacity="0.8"
        />
        <rect
          x="120"
          y="60"
          width="160"
          height="180"
          rx="8"
          fill="white"
          fillOpacity="0.95"
        />
        <circle cx="175" cy="115" r="25" fill="#e2e8f0" />
        <circle cx="225" cy="115" r="25" fill="#e2e8f0" />
        <rect x="150" y="155" width="100" height="8" rx="4" fill="#cbd5e1" />
        <rect x="150" y="175" width="80" height="6" rx="3" fill="#e2e8f0" />
        <path
          d="M165 220 L200 185 L235 220"
          stroke="#e11d48"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect
          x="50"
          y="180"
          width="60"
          height="40"
          rx="4"
          fill="#1e293b"
          opacity="0.5"
        />
        <path d="M60 200 L90 200 L75 175 Z" fill="#f59e0b" opacity="0.9" />
        <rect
          x="290"
          y="120"
          width="50"
          height="35"
          rx="4"
          fill="#1e293b"
          opacity="0.5"
        />
        <circle cx="315" cy="137" r="8" fill="#22c55e" opacity="0.9" />
      </svg>
    </div>
  );
}
