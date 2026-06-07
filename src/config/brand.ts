/**
 * ─────────────────────────────────────────────────────────────────────────
 *  WHITELABEL CONFIG
 *
 *  This file + the CSS variables at the top of `src/index.css` are the only
 *  two places you need to touch to rebrand the entire site:
 *
 *    1. src/config/brand.ts  → name, contact info, images, prices, socials
 *    2. src/index.css        → colors, fonts (the `:root` token block)
 *    3. src/i18n/translations.ts → marketing copy (5 languages)
 *
 *  Everything else derives from these.
 * ─────────────────────────────────────────────────────────────────────────
 */

/** Prefixes a /public asset path with the deploy base URL. */
function asset(path: string): string {
  return import.meta.env.BASE_URL + path
}

export const brand = {
  /** Full brand name, shown in the navbar and footer. */
  name: 'V Barbershop',
  /** Single letter / short mark used in the logo badge. */
  mark: 'V',
  /** Year the shop was established (shown in hero + marquee). */
  est: '2016',

  // ── Contact ──────────────────────────────────────────────────────────
  phone: '+359 88 123 4567',
  email: 'book@vbarbershop.io',
  address: '12 Vitosha Blvd, 1000 Sofia, Bulgaria',
  mapsUrl: 'https://maps.google.com/?q=12+Vitosha+Blvd+Sofia+Bulgaria',

  social: {
    instagram: 'https://instagram.com/vbarbershop',
    facebook: 'https://facebook.com/vbarbershop',
    tiktok: 'https://tiktok.com/@vbarbershop',
  },

  // ── Opening hours (labels are translated, values are not) ───────────
  hours: {
    weekdays: '09:00 – 20:00',
    saturday: '10:00 – 18:00',
    /** `null` renders the translated word "Closed". */
    sunday: null as string | null,
  },

  // ── About-section stats ──────────────────────────────────────────────
  stats: {
    years: '10+',
    clients: '15k+',
    rating: '4.9',
  },

  // ── Service prices (aligned by index with the translated service list)
  prices: ['€18', '€22', '€14', '€20', '€32', '€12'],

  // ── Imagery ──────────────────────────────────────────────────────────
  // Files live in /public/images — replace them (same names) or point
  // these paths elsewhere to rebrand. External URLs also work.
  images: {
    hero: asset('images/hero.jpg'),
    about: asset('images/about.jpg'),
    gallery: [
      asset('images/work-1.jpg'),
      asset('images/work-2.jpg'),
      asset('images/work-3.jpg'),
      asset('images/work-4.jpg'),
      asset('images/work-5.jpg'),
      asset('images/work-6.jpg'),
      asset('images/work-7.jpg'),
      asset('images/work-8.jpg'),
    ],
  },
} as const

export type Brand = typeof brand
