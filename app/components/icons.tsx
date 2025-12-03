// Icon components for Atomprop

export const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowCircle = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 18H24M24 18L18 12M24 18L18 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Star = ({ className = "", filled = true }: { className?: string; filled?: boolean }) => (
  <svg className={className} viewBox="0 0 17 17" fill={filled ? "currentColor" : "none"} xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 0L10.4084 5.87336H16.584L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336H6.59163L8.5 0Z" fill={filled ? "#FFD700" : "none"} stroke={filled ? "none" : "currentColor"}/>
  </svg>
);

export const Quote = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.833 6.5H4.33301L2.16634 13V21.6667H10.833V13H6.49967L8.66634 6.5H10.833ZM23.833 6.5H17.333L15.1663 13V21.6667H23.833V13H19.4997L21.6663 6.5H23.833Z" fill="currentColor"/>
  </svg>
);

export const Phone = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C20.75 21.01 20.5 21.02 20.25 21.02C10.56 21.02 2.75 13.21 2.75 3.52C2.75 3.27 2.76 3.02 2.78 2.77C2.84 2.21 3.29 1.77 3.85 1.77H6.85C7.35 1.77 7.78 2.15 7.84 2.65C7.89 3.1 7.98 3.54 8.11 3.96C8.26 4.45 8.13 4.98 7.75 5.35L6.41 6.69C7.89 9.36 10.41 11.88 13.08 13.36L14.42 12.02C14.79 11.64 15.32 11.51 15.81 11.66C16.23 11.79 16.67 11.88 17.12 11.93C17.62 11.99 18 12.42 18 12.92V16.92C18 16.92 22 16.92 22 16.92Z" fill="currentColor"/>
  </svg>
);

export const Mail = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Location = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Facebook = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 6.027 4.388 11.027 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.024 1.793-4.697 4.533-4.697 1.313 0 2.686.237 2.686.237v2.971h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796v8.437C19.612 23.1 24 18.1 24 12.073z"/>
  </svg>
);

export const Twitter = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Instagram = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const LinkedIn = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const Wallet = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="12" width="56" height="44" rx="4" stroke="currentColor" strokeWidth="4"/>
    <path d="M4 24H60" stroke="currentColor" strokeWidth="4"/>
    <circle cx="48" cy="38" r="4" fill="currentColor"/>
    <path d="M4 12L32 4L60 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const BuyIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="16" width="48" height="40" rx="2" stroke="#912d90" strokeWidth="3"/>
    <path d="M20 8V16M44 8V16" stroke="#912d90" strokeWidth="3" strokeLinecap="round"/>
    <path d="M16 28H48M16 40H36" stroke="#912d90" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="44" cy="44" r="12" fill="#2e62af"/>
    <path d="M44 38V50M38 44H50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const SellIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="8" width="40" height="48" rx="2" stroke="#912d90" strokeWidth="3"/>
    <path d="M20 20H44M20 32H44M20 44H32" stroke="#912d90" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="44" cy="48" r="12" fill="#2e62af"/>
    <path d="M40 48L44 52L52 44" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const TradeIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 32H56" stroke="#912d90" strokeWidth="3" strokeLinecap="round"/>
    <path d="M20 16L8 32L20 48" stroke="#2e62af" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M44 16L56 32L44 48" stroke="#2e62af" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="32" r="8" fill="#912d90"/>
    <path d="M29 32H35M32 29V35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const HeartIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/>
  </svg>
);

export const AtompropLogo = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#912d90"/>
        <stop offset="100%" stopColor="#2e62af"/>
      </linearGradient>
    </defs>
    <path d="M20 50L35 10L50 50H43L38 38H32L27 50H20ZM33.5 32L35 26L36.5 32H33.5Z" fill="url(#logoGradient)"/>
    <text x="55" y="42" fontFamily="var(--font-space-grotesk)" fontSize="28" fontWeight="700" fill="white">atomprop</text>
  </svg>
);

export const ProcessArrow = ({ className = "", direction = "down" }: { className?: string; direction?: "up" | "down" }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: direction === "up" ? "rotate(180deg)" : "none" }}>
    <circle cx="18" cy="18" r="17" stroke="currentColor" strokeWidth="2"/>
    <path d="M18 12V24M12 18L18 24L24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HederaIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 20V44M44 20V44M20 32H44" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M20 26H44M20 38H44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DashboardIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="3"/>
    <rect x="36" y="4" width="24" height="12" rx="4" stroke="currentColor" strokeWidth="3"/>
    <rect x="36" y="24" width="24" height="36" rx="4" stroke="currentColor" strokeWidth="3"/>
    <rect x="4" y="36" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="3"/>
  </svg>
);

export const TransactionIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="3"/>
    <path d="M16 24H48M16 32H40M16 40H32" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const MarketIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 56V32L20 20L32 32L44 16L56 28V56H8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
    <circle cx="20" cy="20" r="4" fill="currentColor"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <circle cx="44" cy="16" r="4" fill="currentColor"/>
  </svg>
);

