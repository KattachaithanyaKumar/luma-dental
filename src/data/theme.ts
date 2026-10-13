/**
 * Design tokens — "Calm Clinical Editorial".
 *
 * Single source of truth for the brand's palette and layout constants.
 * The Tailwind theme (`src/app/globals.css` → `@theme inline`) mirrors these
 * values so utilities like `bg-teal` / `text-heading` resolve consistently.
 */
export const theme = {
  name: "Calm Clinical Editorial",
  colors: {
    /** Cool white — dominant surface. */
    paper: "#ffffff",
    /** Mist — secondary surface / quiet section bands. */
    mist: "#f4f7f7",
    /** Pale clinical sage — selected section backgrounds. */
    sage: "#e7efed",
    /** Soft teal highlight — subtle washes and tags. */
    highlight: "#dcebe8",
    /** Muted blue-green — restrained accents and illustration only. */
    mint: "#b8d1ce",
    /** Primary clinical teal — buttons, links, active states. */
    teal: "#276b6a",
    /** Deep teal — headings, footer, strong contrast. */
    tealDeep: "#173f43",
    /** Main heading text. */
    heading: "#203b3d",
    /** Body text. */
    body: "#586f70",
    /** Secondary / supporting text. */
    subtle: "#728686",
    /** Borders and dividers. */
    line: "#dce5e4",
  },
  /** Max content width shared by layout containers. */
  contentWidth: "1180px",
} as const;

export type Theme = typeof theme;
export type ThemeColors = Theme["colors"];
