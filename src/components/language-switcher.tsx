import {
    Button,
    Dropdown,
    Label,
    type DropdownPopoverProps,
} from '@heroui/react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify-icon/react';
import { ChevronDown } from 'lucide-react';
import { APP_CONFIG } from '@/config';
import { useMemo } from 'react';

export const LanguageSwitcher = ({
    placement,
}: {
    placement?: DropdownPopoverProps['placement'];
}) => {
    const { i18n } = useTranslation();

    const currentLang = useMemo(() => {
        const langCode = i18n.language.split('-')[0];
        return (
            APP_CONFIG.language.list.find((l) => l.code === langCode) ||
            APP_CONFIG.language.list[0]
        );
    }, [i18n.language]);

    const changeLanguage = (nextLangCode: string) => {
        if (nextLangCode === currentLang.code) return;

        localStorage.setItem('i18nextLng', nextLangCode);

        if (APP_CONFIG.language.useUrl) {
            const nextLangConfig = APP_CONFIG.language.list.find(
                (l) => l.code === nextLangCode,
            );
            const pathParts = window.location.pathname.split('/');
            if (APP_CONFIG.language.available.includes(pathParts[1])) {
                pathParts[1] = nextLangCode;
                window.location.href =
                    pathParts.join('/') +
                    window.location.search +
                    window.location.hash;
            } else {
                window.location.href = `${nextLangConfig?.urlCode || `/${nextLangCode}`}${window.location.pathname === '/' ? '' : window.location.pathname}${window.location.search}${window.location.hash}`;
            }
        } else {
            i18n.changeLanguage(nextLangCode);
        }
    };

    if (!APP_CONFIG.language.isEnable) {
        return null;
    }

    return (
        <Dropdown>
            <Dropdown.Trigger>
                <Button
                    variant="ghost"
                    size="sm"
                    className="min-w-fit border px-3 font-bold tracking-wider text-zinc-600 uppercase hover:text-zinc-900"
                >
                    <Icon icon={currentLang.flag} />
                    <ChevronDown />
                </Button>
            </Dropdown.Trigger>
            <Dropdown.Popover placement={placement}>
                <Dropdown.Menu
                    aria-label="Language selection"
                    onAction={(key) => changeLanguage(key as string)}
                    selectedKeys={new Set([currentLang.code])}
                    selectionMode="single"
                >
                    {APP_CONFIG.language.list.map((lang) => (
                        <Dropdown.Item
                            key={lang.code}
                            id={lang.code}
                            textValue={lang.name}
                            className="text-xs font-bold tracking-wider uppercase"
                        >
                            <div className="flex w-full items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Icon icon={lang.flag} />
                                    <Label>{lang.name}</Label>
                                </div>
                                <Dropdown.ItemIndicator />
                            </div>
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
};
