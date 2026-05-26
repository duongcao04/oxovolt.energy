import { useEffect, useState } from 'react';

const CHECK_INTERVAL = 5 * 60 * 1000; // Poll every 5 minutes
const STORAGE_KEY = 'app_version_hash'; // The key used in localStorage

export const useVersionCheck = () => {
    const [hasNewVersion, setHasNewVersion] = useState(false);
    const [latestVersionFromServer, setLatestVersionFromServer] = useState<
        string | null
    >(null);

    useEffect(() => {
        const checkVersion = async () => {
            try {
                // Fetch the latest version from the server, bypassing cache
                const response = await fetch(`/version.json?t=${Date.now()}`, {
                    cache: 'no-store',
                });

                const data = await response.json();
                const serverVersion = data.version;

                // Get the version currently saved in the user's browser
                const localVersion = localStorage.getItem(STORAGE_KEY);

                if (!localVersion) {
                    // Scenario A: Very first time the user visits the site.
                    // Save the current server version to localStorage and do nothing else.
                    localStorage.setItem(STORAGE_KEY, serverVersion);
                    return;
                }

                if (localVersion !== serverVersion) {
                    // Scenario B: The server version is different from the local version.
                    console.log(
                        `Update detected! Local: ${localVersion} | Server: ${serverVersion}`,
                    );
                    setLatestVersionFromServer(serverVersion);
                    setHasNewVersion(true);
                }
            } catch (error) {
                console.error('Failed to fetch version.json:', error);
            }
        };

        // Run immediately on mount, then start polling
        checkVersion();
        const intervalId = setInterval(checkVersion, CHECK_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    // Expose a function to handle the update process safely
    const applyUpdate = () => {
        if (latestVersionFromServer) {
            // 1. Update localStorage to the new version so it doesn't prompt again after reload
            localStorage.setItem(STORAGE_KEY, latestVersionFromServer);

            // 2. Force the browser to reload the page from the server
            window.location.reload();
        }
    };

    return { hasNewVersion, applyUpdate };
};
