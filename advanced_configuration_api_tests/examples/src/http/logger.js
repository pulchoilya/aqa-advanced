export function maskSecrets(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const clone = JSON.parse(JSON.stringify(obj));
  for (const k of Object.keys(clone)) {
    if (
      ['password', 'repeatPassword'].includes(k) &&
      typeof clone[k] === 'string'
    ) {
      clone[k] = '***';
    } else if (typeof clone[k] === 'object') {
      clone[k] = maskSecrets(clone[k]);
    }
  }
  return clone;
}

export function logRequest({ id, method, url, headers, data }) {
  console.log(`[REQ ${id}] ${method.toUpperCase()} ${url}`);
  if (headers) console.log(`[REQ ${id}] headers: ${JSON.stringify(headers)}`);
  if (data !== undefined)
    console.log(`[REQ ${id}] body: ${JSON.stringify(maskSecrets(data))}`);
}

export function logResponse({ id, status, durationMs, data }) {
  console.log(`[RES ${id}] status: ${status} (${durationMs} ms)`);
  if (data !== undefined)
    console.log(`[RES ${id}] body: ${JSON.stringify(maskSecrets(data))}`);
}

export function logError({ id, status, durationMs, message, data }) {
  console.warn(
    `[ERR ${id}] status: ${status ?? 'n/a'} (${durationMs} ms) :: ${message}`,
  );
  if (data !== undefined)
    console.warn(`[ERR ${id}] body: ${JSON.stringify(maskSecrets(data))}`);
}
