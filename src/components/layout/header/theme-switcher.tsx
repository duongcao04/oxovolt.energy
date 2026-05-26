import { MoonIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Switch } from '@heroui/react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <Switch
            defaultSelected={theme === 'dark'}
            onChange={(isSelected) => setTheme(isSelected ? 'dark' : 'light')}
            size="lg"
        >
            {({ isSelected }) => (
                <>
                    <Switch.Control>
                        <Switch.Thumb>
                            <Switch.Icon>
                                {isSelected ? (
                                    <MoonIcon className="size-3 text-inherit opacity-100" />
                                ) : (
                                    <SunIcon className="size-3 text-inherit opacity-70" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </>
            )}
        </Switch>
    );
};
