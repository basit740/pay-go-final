import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import translationEN from './locales/en.json';
import translationSE from './locales/se.json';
import translationES from './locales/es.json';
import translationFR from './locales/fr.json';
// Add or import other languages

// the translations
const resources = {
	en: {
		translation: translationEN,
	},
	se: {
		translation: translationSE,
	},
	es: {
		translation: translationES,
	},
	fr: {
		translation: translationFR,
	},
	// Add other languages here
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: 'se', // default language

		keySeparator: false, // we do not use keys in form messages.welcome

		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
