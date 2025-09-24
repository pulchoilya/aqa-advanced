import axios from 'axios';
import { randomUUID } from 'node:crypto';
import { logRequest, logResponse, logError } from './logger.js';
import { getSid, setSid } from '../auth/session.js'; // 

const BASE_URL = 'https://qauto.forstudy.space/api';
const TIMEOUT_MS = 10000;

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT_MS,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // важливо для Node: дозволяє обробляти cookie/заголовки коректно
  withCredentials: true,
});

// request: додаємо X-Request-Id + Cookie: sid=...
client.interceptors.request.use(
  (config) => {
    const id = randomUUID();
    config.headers['X-Request-Id'] = id;
    config.metadata = { id, start: Date.now() };

    // якщо sid відомий і заголовок Cookie ще не виставлений — додамо
    const sid = getSid();
    if (sid && !config.headers.Cookie) {
      config.headers.Cookie = `sid=${sid}`;
    }

    const url = (config.baseURL || '') + (config.url || '');
    logRequest({
      id,
      method: config.method || 'get',
      url,
      headers: config.headers,
      data: config.data,
    });
    return config;
  },
  (error) => Promise.reject(error),
);

// response: лог + якщо сервер прислав Set-Cookie: sid=... — збережемо
client.interceptors.response.use(
  (response) => {
    const id = response.config?.metadata?.id || 'n/a';
    const start = response.config?.metadata?.start || Date.now();
    const durationMs = Date.now() - start;

    // спробуємо витягти sid з Set-Cookie
    const setCookie = response.headers?.['set-cookie'];
    if (Array.isArray(setCookie)) {
      // шукаємо рядок, в якому є sid=...
      const sidCookie = setCookie.find((c) => /^sid=/.test(c));
      if (sidCookie) {
        const match = sidCookie.match(/^sid=([^;]+)/);
        if (match?.[1]) setSid(match[1]);
      }
    }

    logResponse({
      id,
      status: response.status,
      durationMs,
      data: response.data,
    });
    return response;
  },
  (error) => {
    const cfg = error.config || {};
    const id = cfg.metadata?.id || 'n/a';
    const start = cfg.metadata?.start || Date.now();
    const durationMs = Date.now() - start;
    const status = error.response?.status;
    const data = error.response?.data;
    logError({ id, status, durationMs, message: error.message, data });

    const enriched = new Error(`HTTP ${status ?? 'ERR'}: ${error.message}`);
    enriched.status = status;
    enriched.responseBody = data;
    enriched.requestId = id;
    throw enriched;
  },
);
