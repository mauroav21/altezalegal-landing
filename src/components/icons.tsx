type IconProps = { className?: string };

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 12.5h18" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.25 12.5v1.5a.25.25 0 0 0 .25.25h3a.25.25 0 0 0 .25-.25v-1.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ScaleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 6 5 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M12 6l7 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M2 8.5 5 8l3 .5-3 5-3-5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M16 10.5 19 10l3 .5-3 5-3-5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function FamilyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8.5" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="15.5" cy="7" r="2.25" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 19v-1.5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4V19" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13.5 13.5h1a4 4 0 0 1 4 4V19" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 21V6l8-3 8 3v15" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 21h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M9 10h1M14 10h1M9 14h1M14 14h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M10.5 21v-4a1.5 1.5 0 0 1 3 0v4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12.5 9.5 17 19 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 3.5h2.2l1.3 4-2 1.4a11 11 0 0 0 5.1 5.1l1.4-2 4 1.3v2.2c0 1-.9 1.8-1.9 1.6-6.6-1.1-11.9-6.4-13-13-.2-1 .6-1.9 1.6-1.9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.25" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
