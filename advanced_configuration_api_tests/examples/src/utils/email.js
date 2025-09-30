export function uniqueEmail(prefix = 'student') {
  const ts = new Date().toISOString().replace(/[-:.TZ]/g, '');
  return `${prefix}_${ts}@example.com`;
}
