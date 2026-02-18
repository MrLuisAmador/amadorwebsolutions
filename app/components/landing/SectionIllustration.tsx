type Variant = "leads" | "scale" | "work";

interface SectionIllustrationProps {
  variant: Variant;
  className?: string;
}

export function SectionIllustration({
  variant,
  className,
}: SectionIllustrationProps) {
  return (
    <div
      className={`relative min-h-[280px] md:min-h-[320px] ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-full"
      >
        {variant === "leads" && <LeadsIllustration />}
        {variant === "scale" && <ScaleIllustration />}
        {variant === "work" && <WorkIllustration />}
      </svg>
    </div>
  );
}

function LeadsIllustration() {
  return (
    <>
      <defs>
        <linearGradient id="leads-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect
        x="80"
        y="80"
        width="120"
        height="140"
        rx="8"
        fill="white"
        fillOpacity="0.95"
      />
      <rect x="95" y="95" width="90" height="50" rx="4" fill="#e2e8f0" />
      <rect x="95" y="160" width="60" height="6" rx="3" fill="#cbd5e1" />
      <rect x="95" y="175" width="80" height="6" rx="3" fill="#cbd5e1" />
      <path
        d="M110 230 L150 200 L190 230 L230 200 L270 230"
        stroke="#22c55e"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="200" cy="150" r="15" fill="#f59e0b" opacity="0.6" />
      <rect
        x="240"
        y="100"
        width="80"
        height="100"
        rx="4"
        fill="url(#leads-grad)"
        opacity="0.5"
      />
    </>
  );
}

function ScaleIllustration() {
  return (
    <>
      <defs>
        <linearGradient id="scale-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#e11d48" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect
        x="100"
        y="70"
        width="200"
        height="160"
        rx="8"
        fill="white"
        fillOpacity="0.95"
      />
      <circle cx="170" cy="130" r="20" fill="#e2e8f0" />
      <circle cx="230" cy="130" r="20" fill="#e2e8f0" />
      <circle cx="200" cy="130" r="20" fill="#e2e8f0" />
      <rect x="120" y="170" width="80" height="40" rx="4" fill="#e2e8f0" />
      <rect x="220" y="170" width="80" height="40" rx="4" fill="#e2e8f0" />
      <path
        d="M180 195 L200 175 L220 195 L240 175 L260 195"
        stroke="#22c55e"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="200" cy="100" r="25" fill="url(#scale-grad)" opacity="0.8" />
    </>
  );
}

function WorkIllustration() {
  return (
    <>
      <defs>
        <linearGradient id="work-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect
        x="60"
        y="60"
        width="180"
        height="140"
        rx="8"
        fill="white"
        fillOpacity="0.95"
      />
      <rect x="80" y="80" width="140" height="80" rx="4" fill="#1e293b" />
      <rect
        x="95"
        y="95"
        width="40"
        height="25"
        rx="2"
        fill="#3b82f6"
        opacity="0.8"
      />
      <rect
        x="145"
        y="95"
        width="40"
        height="25"
        rx="2"
        fill="#e11d48"
        opacity="0.8"
      />
      <rect
        x="195"
        y="95"
        width="40"
        height="25"
        rx="2"
        fill="#22c55e"
        opacity="0.8"
      />
      <circle cx="200" cy="175" r="30" fill="#f59e0b" opacity="0.4" />
      <path
        d="M185 175 L200 160 L215 175 L200 190 Z"
        fill="#f59e0b"
        opacity="0.9"
      />
      <rect
        x="260"
        y="100"
        width="80"
        height="80"
        rx="8"
        fill="url(#work-grad)"
        opacity="0.6"
      />
    </>
  );
}
