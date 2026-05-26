/* eslint-disable react-refresh/only-export-components */
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { SECTION_ANCHORS } from './routes/_public/_home/index';
import { UpdateVersionModal } from './components/layout';
import { routeTree } from './routeTree.gen';
import { useVersionCheck } from './hooks';
import ReactDOM from 'react-dom/client';
import { APP_CONFIG } from '@/config';
import { StrictMode } from 'react';
import './styles/global.css';
import './i18n/config';

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

if (window.location.hash) {
    const hash = window.location.hash.slice(1);
    if (SECTION_ANCHORS.has(hash)) {
        window.history.replaceState(
            {},
            '',
            window.location.pathname + window.location.search,
        );
    }
}

const pathLang = window.location.pathname.split('/')[1];
const isValidLangPath =
    APP_CONFIG.language.useUrl &&
    APP_CONFIG.language.available.includes(pathLang);
const basepath = isValidLangPath ? `/${pathLang}` : '/';

// Create the router instance
export const router = createRouter({
    routeTree,
    basepath,
    defaultPendingMs: 0,
});

// Register the router for type safety
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}

function App() {
    const { hasNewVersion } = useVersionCheck();
    return (
        <>
            <RouterProvider router={router} />
            {/* The Version Update Toast */}
            {hasNewVersion && <UpdateVersionModal />}
        </>
    );
}
