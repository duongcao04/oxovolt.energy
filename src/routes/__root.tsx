import { ToastProvider } from '@heroui/react';
import {
    createRootRouteWithContext,
    HeadContent,
    Outlet,
} from '@tanstack/react-router';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from 'antd-style';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { APP_CONFIG } from '../config';
import { NotFoundPage } from '../features/(errors)/404';

export const Route = createRootRouteWithContext()({
    notFoundComponent: () => {
        return <NotFoundPage />;
    },
    component: () => {
        const enableDarkMode = APP_CONFIG.darkMode.isEnable;
        const Wrapper = enableDarkMode ? NextThemeProvider : 'div';

        return (
            <Wrapper>
                <AntdProvider>
                    <HeadContent />
                    <ToastProvider />
                    <div id="app" className="bg-background scroll-smooth">
                        <Outlet />
                        {/* <FloatingButton /> */}
                    </div>
                </AntdProvider>
            </Wrapper>
        );
    },
});
// eslint-disable-next-line react-refresh/only-export-components
function NextThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="system">
            {children}
        </NextThemesProvider>
    );
}
// eslint-disable-next-line react-refresh/only-export-components
function AntdProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <ConfigProvider
                theme={{
                    token: {
                        zIndexPopupBase: 1000, // base for all popups
                    },
                    components: {
                        Modal: {
                            zIndexPopupBase: 1300, // match or exceed HeroUI
                        },
                        Table: {
                            headerBg: 'var(--color-background2)',
                        },
                        Tabs: {
                            horizontalMargin: '0',
                        },
                        Select: {
                            selectorBg: 'var(--color-background)',
                            optionSelectedColor: 'var(--color-primary)',
                            activeBorderColor: 'var(--color-primary)',
                            hoverBorderColor: 'var(--color-primary)',
                            borderRadius: 12,
                            controlPaddingHorizontal: 20,
                            controlHeight: 38,
                        },
                        DatePicker: {
                            colorBgContainer: 'var(--color-background)',
                            activeBorderColor: 'var(--color-primary)',
                            hoverBorderColor: 'var(--color-primary)',
                            borderRadiusLG: 12,
                        },
                    },
                }}
                drawer={{
                    classNames: {
                        wrapper: '!p-2.5 !shadow-none !bg-transparent',
                        content:
                            'rounded-lg shadow-lg !bg-background-muted !text-text-default',
                        body: '!py-3 !px-5',
                    },
                    styles: {
                        header: {
                            paddingInline: 16,
                            paddingBlock: 12,
                        },
                    },
                }}
                modal={{
                    classNames: {
                        content: 'shadow-lg',
                    },
                    style: {
                        top: 80,
                    },
                    styles: {
                        mask: {
                            background: '#000000c0',
                        },
                        content: {
                            borderRadius: '24px',
                        },
                    },
                }}
                select={{
                    style: {
                        MozOutlineRadius: 10,
                    },
                    styles: {
                        root: {
                            borderStartStartRadius: 10,
                            backgroundColor:
                                'var(--color-background) !important',
                        },
                    },
                    classNames: {
                        root: '!rounded-2xl !bg-background',
                    },
                }}
                avatar={{
                    style: {},
                }}
            >
                {children}
            </ConfigProvider>
        </ThemeProvider>
    );
}
