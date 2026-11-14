const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const PhoneIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export const ChatIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 21l1.7-4.6A8.5 8.5 0 1 1 8 19.6L3 21z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.4-2-1-.8.8a4 4 0 0 1-2.1-2.1l.8-.8-1-2L9 9.5z" />
  </svg>
);

export const PinIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ArrowIcon = (p) => (
  <svg {...base} strokeWidth={2} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...base} strokeWidth={2.2} width={16} height={16} {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

export const ShieldIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
);

export const GaugeIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4.9 19a9 9 0 1 1 14.2 0" />
    <path d="M12 13l4-4" />
    <circle cx="12" cy="13" r="1.3" />
  </svg>
);

export const ClipboardIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="5" y="4" width="14" height="18" rx="2" />
    <path d="M9 4V3h6v1M9 11h6M9 15h4" />
  </svg>
);

export const BoltIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base} width={24} height={24} {...p}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} width={24} height={24} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
