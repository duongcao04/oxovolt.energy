import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import ptCommon from './locales/pt/common.json';
import nlCommon from './locales/nl/common.json';
import frCommon from './locales/fr/common.json';
import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';
import deCommon from './locales/de/common.json';
import { APP_CONFIG } from '@/config';

const resources = {
    en: {
        translation: enCommon,
    },
    fr: {
        translation: frCommon,
    },
    es: {
        translation: esCommon,
    },
    de: {
        translation: deCommon,
    },
    nl: {
        translation: nlCommon,
    },
    pt: {
        translation: ptCommon,
    },
};

const getInitialLanguage = () => {
    if (!APP_CONFIG.language.isEnable) {
        localStorage.removeItem('i18nextLng');
        return APP_CONFIG.language.default;
    }

    if (APP_CONFIG.language.useUrl) {
        const pathLang = window.location.pathname.split('/')[1];
        if (APP_CONFIG.language.available.includes(pathLang)) {
            localStorage.setItem('i18nextLng', pathLang);
            return pathLang;
        }
    }
    const saved = localStorage.getItem('i18nextLng');
    if (saved && APP_CONFIG.language.available.includes(saved)) {
        return saved;
    }
    return APP_CONFIG.language.default;
};

i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: APP_CONFIG.language.default,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
