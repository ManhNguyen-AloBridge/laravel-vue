import { nextTick } from 'vue';
import { createI18n, useI18n as baseUseI18n } from 'vue-i18n';
import type { I18n, Locale, VueI18n, Composer, I18nOptions } from 'vue-i18n';
import axios from 'axios';
import en from '../locales/en';
import ja from '../locales/ja';

export const SUPPORT_LOCALES: Array<string> = ['en', 'ja'];
export type MessageSchema = typeof ja;

const i18n: I18n = createI18n<[MessageSchema], 'en' | 'ja'>({
  // legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  formatFallbackMessages: false,
  messages: {
    en,
    ja,
  },
  legacy: false,
  globalInjection: false,
});

export function getLocale(): string {
  return i18n.mode === 'legacy'
    ? (i18n.global as unknown as VueI18n).locale
    : (i18n.global as unknown as Composer).locale.value;
}

export function setLocale(locale: Locale): void {
  if (i18n.mode === 'legacy') {
    (i18n.global as unknown as VueI18n).locale = locale;
  } else {
    (i18n.global as unknown as Composer).locale.value = locale;
  }
}

export function setI18nLanguage(locale: Locale): void {
  setLocale(locale);
  axios.defaults.headers.common['Accept-Language'] = locale;
  document.querySelector('html')?.setAttribute('lang', locale);
}

export function setupI18n(options: I18nOptions = { locale: 'en' }): I18n {
  const i18n = createI18n(options);
  setI18nLanguage(`${options.locale}`);

  return i18n;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getResourceMessages = (r: any) => r.default || r;

export async function loadLocaleMessages(i18n: I18n, locale: Locale) {
  const messages = await import(/* @vite-ignore */ `../locales/${locale}.json`).then(getResourceMessages);

  i18n.global.setLocaleMessage(locale, messages);

  return nextTick();
}

export async function changeLanguage(locale: Locale) {
  if (!locale || !SUPPORT_LOCALES.includes(locale)) {
    return;
  }

  if (!i18n.global.availableLocales.includes(locale)) {
    await loadLocaleMessages(i18n, locale);
  }

  setI18nLanguage(locale);
}

function useI18n() {
  return baseUseI18n<{ message: MessageSchema }>();
}

export { useI18n };
export default i18n;
