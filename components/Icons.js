// Simple line icons drawn for this site. All decorative unless labelled.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
};

export function MountainIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2 20 9 8l4 6.5 2.5-3.5L22 20Z" />
      <circle cx="17" cy="5.5" r="1.8" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 3h3.5l1.8 4.6-2.3 1.6a12 12 0 0 0 6.8 6.8l1.6-2.3L21 15.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 19.5 5.6 16A8.5 8.5 0 1 1 8.4 18.6Z" />
      <path d="M9.3 8.6c.2-.4.6-.4.8-.1l.8 1.5c.1.3 0 .5-.2.7l-.5.5c.6 1.2 1.6 2.2 2.8 2.8l.5-.5c.2-.2.4-.3.7-.2l1.5.8c.3.2.3.6-.1.8-.6.5-1.5.8-2.3.5a7.6 7.6 0 0 1-4.6-4.6c-.3-.8 0-1.7.6-2.2Z" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function CrossIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 7l10 10M17 7 7 17" />
    </svg>
  );
}

export function DownloadIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v11M7 10.5l5 5 5-5M5 20h14" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4a20 20 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.1H8.6v3h2.7V21" />
    </svg>
  );
}

export function YouTubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="m10 9 5 3-5 3Z" fill="currentColor" />
    </svg>
  );
}

export function StarIcon({ filled = true, ...props }) {
  return (
    <svg {...base} strokeWidth={1.5} fill={filled ? 'currentColor' : 'none'} {...props}>
      <path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8Z" />
    </svg>
  );
}
