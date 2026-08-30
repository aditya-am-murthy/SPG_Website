export const CONTACT_EMAIL = 'uclascipolgroup@gmail.com';

export async function sendFormSubmit(fields) {
  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _captcha: 'false',
      _template: 'table',
      ...fields,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.success === false || data.success === 'false') {
    throw new Error(data.message || 'submit failed');
  }
}
