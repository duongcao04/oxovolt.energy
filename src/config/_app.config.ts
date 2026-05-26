const languageList = [
    { code: 'en', urlCode: '/en', name: 'English', flag: 'flagpack:gb-ukm' },
    { code: 'fr', urlCode: '/fr', name: 'Français', flag: 'flagpack:fr' },
    { code: 'nl', urlCode: '/nl', name: 'Nederlands', flag: 'flagpack:nl' },
    { code: 'de', urlCode: '/de', name: 'Deutsch', flag: 'flagpack:de' },
    { code: 'es', urlCode: '/es', name: 'Español', flag: 'flagpack:es' },
    { code: 'pt', urlCode: '/pt', name: 'Português', flag: 'flagpack:pt' },
];

export const APP_CONFIG = {
    showBurgerMenu: false,
    language: {
        isEnable: true,
        useUrl: true,
        availableUrls: languageList.map((l) => l.urlCode),
        available: languageList.map((l) => l.code),
        default: 'en',
        list: languageList,
    },
    darkMode: {
        isEnable: true,
    },
};
