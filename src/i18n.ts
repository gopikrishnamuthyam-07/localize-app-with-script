// src/i18n.ts
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  legacy: false, // use Composition API
  locale: 'en',  // default locale
  fallbackLocale: 'en', // fallback locale
  messages: {
    en: {
      // Your English translations here
      hello: 'Hello, World!',
      // ...
    },
    fr: {
      // Your French translations here
      hello: 'Bonjour le monde!',
      // ...
    },
    // Add more locales as needed
  },
});

export default i18n;
