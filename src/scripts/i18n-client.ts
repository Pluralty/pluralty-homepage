// Client-side language swap. The page is rendered server-side in English
// (the default / SEO-canonical locale). Both the active <html data-lang> and
// the Spanish dictionary are available, so toggling is a pure DOM operation
// with no network request and no full reload.

type Dict = Record<string, string>;

const DEFAULT_LOCALE = 'en';

function getDicts(): Record<string, Dict> {
  const el = document.getElementById('i18n-data');
  let extra: Record<string, Dict> = {};
  if (el?.textContent) {
    try {
      extra = JSON.parse(el.textContent);
    } catch {
      extra = {};
    }
  }
  return { en: {}, ...extra };
}

const dicts = getDicts();
// English values live in the DOM already; capture them as the en dictionary
// so we can swap back without a reload.
function captureDefault() {
  const en: Dict = {};
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (key && !(key in en)) en[key] = node.innerHTML;
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((node) => {
    parseAttrSpec(node.dataset.i18nAttr).forEach(({ attr, key }) => {
      const cacheKey = `attr:${attr}:${key}`;
      if (!(cacheKey in en)) en[cacheKey] = node.getAttribute(attr) ?? '';
    });
  });
  dicts.en = en;
}

function parseAttrSpec(spec?: string): { attr: string; key: string }[] {
  if (!spec) return [];
  return spec
    .split(',')
    .map((pair) => pair.trim())
    .filter(Boolean)
    .map((pair) => {
      const [attr, key] = pair.split(':');
      return { attr: attr.trim(), key: key.trim() };
    });
}

function apply(locale: string) {
  const dict = dicts[locale] ?? dicts.en;
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (key && dict[key] != null) node.innerHTML = dict[key];
  });
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((node) => {
    parseAttrSpec(node.dataset.i18nAttr).forEach(({ attr, key }) => {
      const cacheKey = `attr:${attr}:${key}`;
      const value = dict[cacheKey] ?? dict[key];
      if (value != null) node.setAttribute(attr, value);
    });
  });
  document.documentElement.setAttribute('lang', locale);
  document.documentElement.setAttribute('data-lang', locale);
  // Toggle button labels / pressed state
  document.querySelectorAll<HTMLElement>('[data-lang-btn]').forEach((btn) => {
    const isActive = btn.dataset.langBtn === locale;
    btn.setAttribute('aria-pressed', String(isActive));
  });
  const title = dict['meta.title'] ?? dicts.en['meta.title'];
  if (title) document.title = title;
}

function setLocale(locale: string) {
  try {
    localStorage.setItem('pl-lang', locale);
  } catch {
    /* private mode */
  }
  apply(locale);
}

captureDefault();

const current = document.documentElement.getAttribute('data-lang') || DEFAULT_LOCALE;
if (current !== DEFAULT_LOCALE) apply(current);

document.querySelectorAll<HTMLElement>('[data-lang-btn]').forEach((btn) => {
  btn.addEventListener('click', () => setLocale(btn.dataset.langBtn || DEFAULT_LOCALE));
});
