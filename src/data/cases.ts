// Canonical ordering of case studies. Single source of truth for prev/next
// navigation on the detail pages (see CaseNextPrev.astro). `name` is a literal
// (case names are not translated today); `tagKey` is an i18n key resolved via
// the Tr component / t().
export interface CaseEntry {
  slug: string;
  name: string;
  tagKey: string;
}

export const cases: CaseEntry[] = [
  { slug: 'stabled', name: 'Stabled', tagKey: 'case.stabled.tag' },
  { slug: 'tradeprentice', name: 'Tradeprentice', tagKey: 'case.tradeprentice.tag' },
  { slug: 'muchticket', name: 'Muchticket', tagKey: 'case.muchticket.tag' },
  { slug: 'pgsa', name: 'PGSA', tagKey: 'case.pgsa.tag' },
];

/** Returns the previous/next case entries for a given slug (null at the ends). */
export function adjacentCases(slug: string): { prev: CaseEntry | null; next: CaseEntry | null } {
  const i = cases.findIndex((c) => c.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? cases[i - 1] : null,
    next: i < cases.length - 1 ? cases[i + 1] : null,
  };
}
