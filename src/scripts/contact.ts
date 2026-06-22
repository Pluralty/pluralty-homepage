// Contact form: client validation, honeypot, and POST to the public API
// Gateway endpoint. No secrets here — only the public invoke URL, injected at
// build time. All user-facing strings live in the DOM (translated by the i18n
// layer); this script only toggles visibility and posts JSON.

const API_URL = import.meta.env.PUBLIC_CONTACT_API_URL as string | undefined;

const form = document.getElementById('contact-form') as HTMLFormElement | null;

if (form) {
  const statusError = document.getElementById('form-error');
  const successBox = document.getElementById('form-success');
  const submitBtn = form.querySelector<HTMLButtonElement>('[data-submit]');
  const submitLabel = submitBtn?.querySelector('[data-submit-label]');
  const sendingLabel = submitBtn?.querySelector('[data-submit-sending]');

  const showError = (name: string, show: boolean) => {
    const el = form.querySelector<HTMLElement>(`[data-err="${name}"]`);
    const field = form.querySelector<HTMLElement>(`[name="${name}"]`);
    if (el) el.hidden = !show;
    if (field) field.setAttribute('aria-invalid', String(show));
  };

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = (data: FormData): boolean => {
    let ok = true;
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    showError('name', false);
    showError('email', false);
    showError('message', false);
    if (name.length < 2) {
      showError('name', true);
      ok = false;
    }
    if (!emailRe.test(email)) {
      showError('email', true);
      ok = false;
    }
    if (message.length < 5) {
      showError('message', true);
      ok = false;
    }
    return ok;
  };

  const setSending = (sending: boolean) => {
    if (!submitBtn) return;
    submitBtn.disabled = sending;
    if (submitLabel) (submitLabel as HTMLElement).hidden = sending;
    if (sendingLabel) (sendingLabel as HTMLElement).hidden = !sending;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (statusError) statusError.hidden = true;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (String(data.get('company_url') || '').length > 0) {
      // Silently pretend success to waste the bot's time.
      form.hidden = true;
      if (successBox) successBox.hidden = false;
      return;
    }

    if (!validate(data)) return;

    if (!API_URL) {
      if (statusError) statusError.hidden = false;
      return;
    }

    setSending(true);
    try {
      const payload = {
        name: data.get('name'),
        email: data.get('email'),
        company: data.get('company'),
        spend: data.get('spend'),
        message: data.get('message'),
        locale: document.documentElement.getAttribute('data-lang') || 'en',
      };
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.hidden = true;
      if (successBox) successBox.hidden = false;
    } catch {
      if (statusError) statusError.hidden = false;
    } finally {
      setSending(false);
    }
  });
}
