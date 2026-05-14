import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locales.includes(locale) ? locale : 'en';
  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default
  };
});
