# How to Add a New Language

This guide explains how to add a new language to the OXOVOLT website. The process is fully dynamic, so you only need to update the configuration and add your translation files. The `LanguageSwitcher` and routing will automatically handle the rest.

## 1. Update the Configuration (`_app.config.ts`)

Open `src/config/_app.config.ts` and add your new language to the `languageList` array.

For example, to add German (`de`):

```typescript
// src/config/_app.config.ts
const languageList = [
    { code: 'en', urlCode: '/en', name: 'English', flag: 'EN' },
    { code: 'fr', urlCode: '/fr', name: 'Français', flag: 'FR' },
    // Add your new language here:
    { code: 'de', urlCode: '/de', name: 'Deutsch', flag: 'DE' },
];
```

_Note: The `APP_CONFIG` automatically computes the available language codes and URLs from this list, so you don't need to change anything else in this file._

## 2. Create the Translation Folder

Navigate to the locales directory and create a new folder for your language code:

```bash
mkdir -p src/i18n/locales/de
```

## 3. Add Your Translation File

Inside the new folder, create a `common.json` file. You can copy the structure from the English or French version.

```json
// src/i18n/locales/de/common.json
{
    "home": {
        "hero": {
            "title": "Willkommen bei OXOVOLT",
            "subtitle": "..."
        }
    }
}
```

## 4. Register the Language in i18n Configuration

Finally, you need to tell the `i18next` library to load your new JSON file. Open `src/i18n/config.ts` and import your file, then add it to the `resources` object.

```typescript
// src/i18n/config.ts
import frCommon from './locales/fr/common.json';
import enCommon from './locales/en/common.json';
import deCommon from './locales/de/common.json'; // 1. Import your new file

const resources = {
    en: {
        translation: enCommon,
    },
    fr: {
        translation: frCommon,
    },
    de: {
        // 2. Add it to the resources object
        translation: deCommon,
    },
};
```

## That's It!

Your new language will now automatically appear in the Language Switcher dropdown, and the website will support the `/de` URL prefix.
