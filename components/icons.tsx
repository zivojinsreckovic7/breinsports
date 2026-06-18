import type { SVGProps } from "react";

/**
 * Consistent stroke icon set (1.6px, round caps/joins, 24px grid).
 * No emoji is ever used as a structural icon — these scale cleanly and theme via currentColor.
 */

type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Base>
);

export const ArrowUpRight = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Base>
);

export const Menu = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Base>
);

export const Close = (p: IconProps) => (
  <Base {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Base>
);

export const Check = (p: IconProps) => (
  <Base {...p}>
    <path d="m4 12 5 5L20 6" />
  </Base>
);

export const Infrastructure = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 21h18" />
    <path d="M5 21V8l5-3v16" />
    <path d="M10 21V11l5 2v8" />
    <path d="M15 21v-6l4 1.5V21" />
    <path d="M8 9h0M8 12h0M8 15h0" />
  </Base>
);

export const Academy = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 4 9 4-9 4-9-4 9-4Z" />
    <path d="M7 10v4c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4" />
    <path d="M21 8v5" />
  </Base>
);

export const Trophy = (p: IconProps) => (
  <Base {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4v1a3 3 0 0 0 3 3" />
    <path d="M17 6h3v1a3 3 0 0 1-3 3" />
    <path d="M12 14v3" />
    <path d="M9 20h6" />
    <path d="M10 17h4l-.5 3h-3L10 17Z" />
  </Base>
);

export const Bank = (p: IconProps) => (
  <Base {...p}>
    <path d="m3 9 9-5 9 5" />
    <path d="M4 9h16" />
    <path d="M5 9v8M9.5 9v8M14.5 9v8M19 9v8" />
    <path d="M3 21h18" />
  </Base>
);

export const Whistle = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="14" r="5" />
    <path d="M9 9V6h6l3 3-4 2" />
    <path d="M9 14h0" />
  </Base>
);

export const Football = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m12 7 3 2.2-1.1 3.6h-3.8L9 9.2 12 7Z" />
    <path d="M12 7V3.2M14.9 9.2l3.5-1.3M13.9 12.8l2.3 3M10.1 12.8l-2.3 3M9.1 9.2 5.6 7.9" />
  </Base>
);

export const Basketball = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3v18" />
    <path d="M5.6 5.6c3.5 3.5 3.5 9.3 0 12.8" />
    <path d="M18.4 5.6c-3.5 3.5-3.5 9.3 0 12.8" />
  </Base>
);

export const MapPin = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Base>
);

export const Phone = (p: IconProps) => (
  <Base {...p}>
    <path d="M6.5 4h3l1.5 4-2 1.4a11 11 0 0 0 5.6 5.6L16 13l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </Base>
);

export const Mail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 6.5 8.5 6 8.5-6" />
  </Base>
);

export const Globe = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.6 2.4 4 5.6 4 9s-1.4 6.6-4 9c-2.6-2.4-4-5.6-4-9s1.4-6.6 4-9Z" />
  </Base>
);

export const ShieldLock = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 5 6v5c0 4.4 3 8.3 7 10 4-1.7 7-5.6 7-10V6l-7-3Z" />
    <rect x="9.5" y="11" width="5" height="4.5" rx="1" />
    <path d="M10.5 11v-1a1.5 1.5 0 0 1 3 0v1" />
  </Base>
);

export const Cpu = (p: IconProps) => (
  <Base {...p}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M10.5 10.5h3v3h-3z" />
    <path d="M10 4v2M14 4v2M10 18v2M14 18v2M4 10h2M4 14h2M18 10h2M18 14h2" />
  </Base>
);

export const Growth = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 19h16" />
    <path d="m5 15 4-4 3 3 6-7" />
    <path d="M18 7h-3M18 7v3" />
  </Base>
);

/** Icon registry used by data-driven sections. */
export const iconMap = {
  infrastructure: Infrastructure,
  academy: Academy,
  trophy: Trophy,
  bank: Bank,
  whistle: Whistle,
  football: Football,
  basketball: Basketball,
} as const;

export type IconName = keyof typeof iconMap;
