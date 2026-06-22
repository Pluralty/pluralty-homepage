import en from './en';
import es from './es';

export type Locale = 'en' | 'es';
export type Dict = Record<string, string>;

export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALES: Locale[] = ['en', 'es'];

const dicts: Record<Locale, Dict> = { en, es };

export function getDict(locale: Locale = DEFAULT_LOCALE): Dict {
  return dicts[locale] ?? en;
}

/**
 * Server-side translator for the default locale. Components render with this;
 * the client swaps to Spanish at runtime via the embedded dictionary.
 */
export function t(key: string, locale: Locale = DEFAULT_LOCALE): string {
  const d = dicts[locale] ?? en;
  return d[key] ?? en[key] ?? key;
}

/** The non-default dictionaries shipped to the client for the language toggle. */
export function clientDicts(): Partial<Record<Locale, Dict>> {
  return { es };
}
